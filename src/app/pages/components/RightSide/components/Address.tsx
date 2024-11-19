import { useTranslations } from "next-intl";
import React, { FC, ReactElement } from "react";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";

const Address: FC = (): ReactElement => {


  const t = useTranslations("contact");

  return (
    <address className="not-italic addr-box bg-slate-50 shadow-lg p-10">
      <div className="flex flex-col md:flex-row gap-4 items-center mb-5">
        <div className="flex justify-center text-sky-400 hover:text-sky-50 items-center rounded-full p-2 bg-opacity-92 bg-sky-200 hover:bg-sky-400 transition duration-300 cursor-pointer">
          <TfiLocationPin className="text-lg" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="p-0 text-lg font-bold">{t("address")}</h3>
          <p className="text-sm">{t("addressDetails")}</p>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row gap-4 items-center mb-5">
        <div className="flex justify-center text-sky-400 hover:text-sky-50 items-center rounded-full p-2 bg-opacity-92 bg-sky-200 hover:bg-sky-400 transition duration-300 cursor-pointer">
          <FiPhone className="text-lg " />
        </div>
        <div className="text-center md:text-left">
          <h3 className="p-0 text-lg font-bold">Call Us</h3>
          <p className="text-sm">+1 5589 55488 55</p>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-5">
        <div className="flex justify-center text-sky-400 hover:text-sky-50 items-center rounded-full p-2 bg-opacity-92 bg-sky-200 hover:bg-sky-400 transition duration-300 cursor-pointer">
          <TfiEmail className="text-lg" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="p-0 text-lg font-bold">{t("emailMe")}</h3>
          <p className="text-sm">workostapuk@gmail.com</p>
        </div>
      </div>
      <div className="mt-10 w-full h-[250px] rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80797.61613158873!2d25.251604641083304!3d50.73987055475896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599eba185965d%3A0xd25274a2228db86c!2z0JvRg9GG0YzQuiwg0JLQvtC70LjQvdGB0YzQutCwINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1suk!2sua!4v1731776909681!5m2!1suk!2sua"
          width="600"
          height="450"
          className="border-0 w-full h-full rounded-xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </address>
  );
};

export default Address;
