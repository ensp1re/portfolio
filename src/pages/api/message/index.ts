import { sendEmail } from "@src/app/utils/transport";
import { isEmail } from "@src/app/utils/validation";
import { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many requests, please try again later.",
  keyGenerator: (req) =>
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || "",
});

/* eslint-disable @typescript-eslint/no-explicit-any */
const applyRateLimit = (req: NextApiRequest, res: NextApiResponse, fn: any) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
/* eslint-enable @typescript-eslint/no-explicit-any */

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await applyRateLimit(req, res, limiter);

    if (req.method === "POST") {
      const data = req.body;

      if (
        !data.firstName ||
        !data.lastName ||
        !data.email ||
        !data.message ||
        !isEmail(data.email)
      ) {
        return res.status(400).json({ message: "Bad request" });
      }

      await sendEmail(data);
      return res.status(200).json({ message: "Email sent successfully" });
    }

    if (req.method === "GET") {
      return res.status(404).json({ message: "Not found" });
    }

    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error("Error in message handler", error);

    if ((error as { status: number }).status === 429) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later." });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
}
