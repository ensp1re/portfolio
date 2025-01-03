import React, { FC, ReactElement, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useTranslations } from "next-intl";

const URL = `/api/message`;

const ContactForm: FC = (): ReactElement => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const t = useTranslations("contact");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      toast
        .promise(
          axios.post(
            URL,
            {
              firstName,
              lastName,
              email,
              message,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          ),
          {
            loading: "Sending message...",
            success: "Message sent successfully",
            error: error || "Failed to send message",
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
          }
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error in contact form submit", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="not-italic w-full form-box bg-slate-50 shadow-lg p-10"
    >
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              const value = (e.target as HTMLInputElement).value;
              setFirstName(value);
            }}
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
            placeholder=" "
            value={lastName}
            onChange={(e) => {
              const value = (e.target as HTMLInputElement).value;
              setLastName(value);
            }}
            required
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
          placeholder=" "
          required
          value={email}
          onChange={(e) => {
            const value = (e.target as HTMLInputElement).value;
            setEmail(value);
          }}
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="floating_password"
          id="floating_password"
          rows={10}
          value={message}
          onChange={(e) => {
            const value = (e.target as HTMLTextAreaElement).value;
            setMessage(value);
          }}
          className="block py-2.5 resize-none px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Message
        </label>
      </div>
      <div className="flex justify-center">
        <button
          disabled={isLoading}
          type="submit"
          className={`text-white bg-sky-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-sky-700  duration-300
          ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}
            `}
        >
          {isLoading ? (
            <FaSpinner className="animate-spin inline-block" />
          ) : (
            t("button")
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
