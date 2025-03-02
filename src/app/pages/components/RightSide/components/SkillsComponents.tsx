import { useTranslations } from "next-intl";
import React, { ReactElement } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiElasticsearch,
  SiRabbitmq,
  SiKibana,
  SiRedis,
  SiRedux,
  SiFlask,
  SiDjango,
  SiSelenium,
  SiDocker,
  SiGit,
  SiNestjs,
  SiSass,
  SiSolidity,
} from "react-icons/si";

import Flag from "react-world-flags"

/**
 * SkillsComponents is a React functional component that displays a categorized list of skills.
 * 
 * The component is divided into several sections:
 * - Web Development Skills: Displays skills related to front-end and back-end web development.
 * - Database Skills: Displays skills related to various database technologies.
 * - Other Skills: Displays additional skills including tools and programming languages.
 * - Languages: Displays language proficiency.
 * 
 * Each skill is represented by a `SkillItem` component which includes an icon, label, and color.
 * 
 * @returns {ReactElement} A JSX element containing the categorized list of skills.
 */
const SkillsComponents: React.FC = (): ReactElement => {
  const t = useTranslations("skills");

  return (
    <div className="shadow-lg bg-slate-100 p-4 sm:p-6 lg:p-8">
      <p className="mb-8 text-lg sm:text-base text-gray-700">
        {t("webDevelopment")}
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
        {t("webDevelopmentSkills")}
      </h3>
      {/* Web Development Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <SkillItem icon={<FaHtml5 />} label="HTML5" color="#E34F26" />
        <SkillItem icon={<FaCss3Alt />} label="CSS3" color="#1572B6" />
        <SkillItem icon={<FaJs />} label="JavaScript" color="#F7DF1E" />
        <SkillItem icon={<SiTypescript />} label="TypeScript" color="#3178C6" />
        <SkillItem icon={<FaReact />} label="React" color="#61DAFB" />
        <SkillItem icon={<SiNextdotjs />} label="Next.js" color="#000000" />
        <SkillItem icon={<SiVite />} label="Vite.js" color="#646CFF" />
        <SkillItem
          icon={<SiTailwindcss />}
          label="Tailwind CSS"
          color="#38B2AC"
        />
        <SkillItem icon={<FaNodeJs />} label="Node.js" color="#339933" />
        <SkillItem icon={<SiExpress />} label="Express.js" color="#000000" />
        <SkillItem icon={<SiNestjs />} label="NestJs" color="#E0234E" />
        <SkillItem icon={<SiSass />} label="Sass" color="#CC6699" />
        <SkillItem icon={<SiSocketdotio />} label="Socket.IO" color="#010101" />
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-8 mb-4">
        {t("databaseSkills")}
      </h3>
      {/* Database Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <SkillItem icon={<SiMongodb />} label="MongoDB" color="#47A248" />
        <SkillItem icon={<SiMysql />} label="MySQL" color="#4479A1" />
        <SkillItem icon={<SiPostgresql />} label="PostgreSQL" color="#4169E1" />
        <SkillItem icon={<SiPrisma />} label="Prisma" color="#0C344B" />
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-8 mb-4">
        {t("otherSkills")}
      </h3>
      {/* Other Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <SkillItem
          icon={<SiElasticsearch />}
          label="Elasticsearch"
          color="#005571"
        />
        <SkillItem icon={<SiRabbitmq />} label="RabbitMQ" color="#FF6600" />
        <SkillItem icon={<SiKibana />} label="Kibana" color="#005571" />
        <SkillItem icon={<SiRedis />} label="Redis" color="#DC382D" />
        <SkillItem icon={<SiRedux />} label="Redux" color="#764ABC" />
        <SkillItem icon={<FaPython />} label="Python" color="#3776AB" />
        <SkillItem icon={<SiFlask />} label="Flask (Basic)" color="#000000" />
        <SkillItem icon={<SiDjango />} label="Django (Basic)" color="#092E20" />
        <SkillItem icon={<SiSelenium />} label="Selenium" color="#43B02A" />
        <SkillItem icon={<SiDocker />} label="Docker" color="#2496ED" />
        <SkillItem icon={<SiGit />} label="Git" color="#F05032" />
        <SkillItem icon={<SiSolidity />} label="Solidity" color="#3776AB" />
      </div>
      {/* Languages Section */}
      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-8 mb-4">
        {t("languages")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <SkillItem icon={<Flag code="gb" />} label="English (Conversational)" color="#1D4ED8" />
        <SkillItem icon={<Flag code="ua" />} label="Ukrainian (Native)" color="#FFC107" />
        <SkillItem icon={<Flag code="es" />} label="Spanish (Basic)" color="#FF5722" />
      </div>
    </div>
  );
};

const SkillItem = ({
  icon,
  label,
  color,
}: {
  icon?: React.ReactNode;
  label: string;
  color: string;
}) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300">
      <div
        className={`w-12 h-12 flex items-center justify-center ${React.isValidElement(icon) && icon.type === Flag ? '' : 'rounded-full'}`}
        style={{ backgroundColor: React.isValidElement(icon) && icon.type === Flag ? 'transparent' : color }}
      >
        {icon &&
          React.cloneElement(icon as React.ReactElement, {
            size: 30,
            color: React.isValidElement(icon) && icon.type === Flag ? undefined : "white",
          })}
      </div>
      <p className="mt-2 text-sm sm:text-base text-gray-800 font-medium text-center">
        {label}
      </p>
    </div>
  );
};

export default SkillsComponents;
