import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import ContactForm from "@src/app/pages/components/RightSide/components/ContactForm";
import Address from "./Address";
import { useTranslations } from "next-intl";

const Contact: FC = (): ReactElement => {

  const t = useTranslations("contact");

  return (
    <motion.section
      id="contact"
      className="container-custom relative flex w-full min-h-screen flex-col py-20 px-5 md:px-10 lg:px-20 gap-8 bg-sky-50 text-slate-900 border-t-1"
      initial={{ opacity: 0.3, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title text-2xl md:text-3xl mb-10 lg:text-4xl font-bold relative text-[#050d18]">
        {t("title")}
      </h2>
      <div className="flex flex-wrap gap-6">
        <Address />
        <ContactForm />
      </div>
    </motion.section>
  );
};

export default Contact;
