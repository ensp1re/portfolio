import { useTranslations } from "next-intl";
import React, { FC, ReactElement } from "react";

const Footer: FC = (): ReactElement => {


  const t = useTranslations();

  return (
    <footer className="flex justify-center p-12 border-t border-t-sky-100  items-center w-full h-20 bg-sky-50 text-slate-900">
      <p className="text-center">
        &copy; {new Date().getFullYear()} - {t("footer")}
      </p>
    </footer>
  );
};

export default Footer;
