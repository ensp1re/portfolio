import React, { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { projectData } from "@src/app/utils/data.utils";
import { v4 as uuidv4 } from "uuid";
import { ICardComponent } from "@src/app/interfaces/main.interface";
import { useTranslations } from "next-intl";

/**
 * Projects component that displays a list of projects with their details.
 * 
 * This component uses the `useTranslations` hook to fetch translations for the project titles.
 * It maps over the `projectData` array to update each project's title with the translated version.
 * 
 * The component is wrapped in a `motion.section` from Framer Motion to add animations.
 * 
 * @returns {ReactElement} The rendered Projects component.
 */
const Projects: FC = (): ReactElement => {

  const t = useTranslations("projects");

  const translatedProjectData = projectData.map((project: ICardComponent) => {
    return {
      ...project,
      title: t(project.title.split(" ")[0].toLowerCase()),
    };
  });

  return (
    <motion.section
      id="projects"
      className="lg:ml-0 container-custom gap-10 relative flex w-full min-h-screen flex-col py-[80px] px-5 md:px-10 lg:px-20 bg-sky-50 text-slate-900 border-t-1"
      initial={{ opacity: 0.3, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold relative text-[#050d18]">
        {t("title")}
      </h2>
      {/* repeat() important  */}
      <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(420px,1fr))] w-full list-none m-0 p-0 gap-6 justify-center md:justify-start">
        {translatedProjectData &&
          translatedProjectData.map((project: ICardComponent) => {
            return (
              <Card
                key={uuidv4()}
                github={project.github}
                title={project.title}
                images={project.images}
                href={project.href}
              />
            );
          })}
      </ul>
    </motion.section>
  );
};

export default Projects;
