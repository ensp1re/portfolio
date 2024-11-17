import Image from "next/image";
import { FC, ReactElement } from "react";
import InfoItem from "@src/app/pages/components/RightSide/components/InfoItem";
import { motion } from "framer-motion";

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
        About
      </h2>
      <p className="p-0 m-0">
        I am a full-stack developer who enjoys building websites and
        applications. I focus on both the front-end and back-end, which means I
        can create the part users see and the server-side logic that powers the
        application. I like solving problems and working with others to create
        useful software. I am always looking to learn new skills and improve my
        work.
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
                  "contentUrl": "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728663650/avatar_wfztoa.jpg",
                  "creator": {
                    "@type": "Person",
                    "name": "Ostapuk Oleksandr"
                  },
                  "description": "A professional profile image of Ostapuk Oleksandr",
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
              "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728663650/avatar_wfztoa.jpg"
            }
          />
        </div>
        <div className="w-full h-full flex flex-col gap-5">
          <h2 className="font-bold text-[26px] text-[#050d18]">
            Full-Stack Developer
          </h2>
          <p>
            I create websites and applications that are easy to use and work
            well on different devices.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
            <InfoItem label="Birthday" value="4 April 2005" />
            <InfoItem label="Website" value="www.ostapuk.tech" />
            <InfoItem label="Phone" value="+38 098 565 79 77" />
            <InfoItem label="City" value="Lutsk, Ukraine" />
            <InfoItem label="Age" value={calculateAge("2005-04-04")} />
            <InfoItem label="Degree" value="Bachelor" />
          </ul>
          <p>
            I enjoy learning about the latest technologies in web development.
            My goal is to make software that meets users needs and is easy to
            understand. I believe good communication and teamwork are important
            for success in any project.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
