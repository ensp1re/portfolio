import { type NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@src/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number.parseInt(searchParams.get("page") || "1");
  const limit = Number.parseInt(searchParams.get("limit") || "6");
  const skip = (page - 1) * limit;

  try {
    const testimonials = await prisma.testimonial.findMany({
      skip,
      take: limit,
      orderBy: {
        date: "desc",
      },
    });

    const total = await prisma.testimonial.count();

    return NextResponse.json({
      testimonials,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      },
    });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await request.json();
    const testimonial = await prisma.testimonial.create({
      data,
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}
