import Image from "next/image";
import { FC, ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Main: FC = (): ReactElement => {
  const t = useTranslations("personalInfo");

  const jobTitles: string[] = [
    t("job.title1"),
    t("job.title2"),
    t("job.title3"),
    t("job.title4"),
    t("job.title5"),
  ];

  return (
    <section
      id="home"
      className="lg:ml-0 bg-[#040b14] container-custom relative flex w-full min-h-screen py-[80px] px-5 md:px-10 lg:px-20"
    >
      <Image
        alt="Hero Background"
        width="1280"
        height="720"
        loading="lazy"
        className="absolute inset-0 h-full w-full opacity-70 object-cover z-[1]"
        src={
          "/hero.jpg"
        }
      />
      <motion.div
        initial={{ opacity: 0.3, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex w-full text-white text-start justify-center m-0 flex-col z-[2]"
      >
        <h1
          className={`font-bold text-[30px] sm:text-[36px] lg:text-[46px] ${raleway.className}`}
        >
          {t("name").split(" ")[0]} <br className="lg:hidden" />
          {t("name").split(" ")[1]}
        </h1>
        <p className="flex gap-2 text-white text-[18px] sm:text-[22px] lg:text-[26px] flex-row">
          {t("who")}{" "}
          <TypeAnimation
            cursor={true}
            sequence={jobTitles}
            repeat={Infinity}
            speed={5}
            wrapper="span"
            className={`underline underline-offset-4 decoration-blue-400`}
          />
        </p>
      </motion.div>
    </section>
  );
};

export default Main;
