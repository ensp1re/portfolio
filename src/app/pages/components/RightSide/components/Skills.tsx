import { FC, ReactElement } from "react";
import SlickComponents from "@src/app/pages/components/RightSide/components/SkillsComponents";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Skills: FC = (): ReactElement => {
  const t = useTranslations("skills");
  return (
    <motion.section
      initial={{ opacity: 0.3, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="skills"
      className="lg:ml-0 container-custom relative flex flex-col w-full min-h-screen gap-8 py-[80px] px-5 md:px-10 lg:px-20 bg-slate-50 text-slate-900"
    >
      <h2 className="section-title text-[32px] font-bold relative text-[#050d18]">
        {t("title")}
      </h2>
      <SlickComponents />
    </motion.section>
  );
};

export default Skills;
