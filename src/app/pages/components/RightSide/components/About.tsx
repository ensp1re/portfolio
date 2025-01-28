import Image from "next/image";
import { FC, ReactElement } from "react";
import InfoItem from "@src/app/pages/components/RightSide/components/InfoItem";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const About: FC = (): ReactElement => {
  const calculateAge = (birthDate: string): string => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return `${age}`;
  };

  const t1 = useTranslations("about");
  const t2 = useTranslations("personalInfo");

  return (
    <motion.section
      id="about"
      className="lg:ml-0 container-custom relative flex w-full min-h-screen flex-col py-[80px] px-5 md:px-10 lg:px-20 gap-8 bg-slate-50 text-slate-900 border-t-1"
      initial={{ opacity: 0.3, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title text-[32px] font-bold relative text-[#050d18]">
        {t1("title")}
      </h2>
      <p className="p-0 m-0">
        {t1("description")}.
      </p>
      <div className="flex w-full h-full flex-col lg:flex-row gap-[25px]">
        <div className="w-[325px] h-[325px] pr-5 relative aspect-square">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "ImageObject",
                  "contentUrl": "/avatar.jpeg",
                  "creator": {
                    "@type": "Person",
                    "name": "Ostapuk Oleksandr"
                  },
                  "description": "A professional profile image of Ostapuk Oleksandr | Остапук Олександр",
                  "license": "https://creativecommons.org/licenses/by/4.0/"
                }
              `,
            }}
          />
          <Image
            alt="Profile image"
            width="1920"
            loading="lazy"
            height="1080"
            className="w-full h-full object-cover"
            src={
              "/avatar.jpeg"
            }
          />
        </div>
        <div className="w-full h-full flex flex-col gap-5">
          <h2 className="font-bold text-[26px] text-[#050d18]">
            {t2("job.title1")}
          </h2>
          <p>
            {t1("fullStackDeveloper")}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
            <InfoItem label={t1("birthday")} value="4 April 2005" />
            <InfoItem label={t1("website")} value="www.ostapuk.tech" />
            <InfoItem label={t1("phone")} value="+38 098 565 79 77" />
            <InfoItem label={t1("city")} value="Lutsk, Ukraine" />
            <InfoItem label={t1("age")} value={calculateAge("2005-04-04")} />
            <InfoItem label={t1("degree")} value="Bachelor" />
          </ul>
          <p>
            {t1("goal")}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
