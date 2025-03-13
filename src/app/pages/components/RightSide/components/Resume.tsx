import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Experience {
  title: string;
  duration: string;
  description: string;
  responsibilities: string[];
}


const Resume: FC = (): ReactElement => {
  const t1 = useTranslations("resume");
  const t2 = useTranslations("contact");

  const experienceArray: Experience[] = t1.raw("experience2");






  return (
    <motion.section
      initial={{ opacity: 0.3, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="resume"
      className="lg:ml-0 container-custom relative flex flex-col w-full min-h-screen gap-8 py-[80px] px-5 md:px-10 lg:px-20 bg-sky-50 text-slate-900"
    >
      <h2 className="section-title text-[32px] font-bold relative text-[#050d18]">
        {t1("title")}
      </h2>
      <p>
        {t1("objective")}
        <br />
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="">
          <h3
            className="
            font-raleway
            text-[26px] font-bold relative my-[20px] text-[#050d18]
          "
          >
            {t1("summary")}
          </h3>

          <div className="custom-resume relative px-[20px] border-l-2 border-l-sky-400">
            <h4 className="font-raleway text-[18px] uppercase font-semibold relative bottom-1">
              {t1("name")}
            </h4>
            <p className="mb-[16px]">
              <em>
                {t1("experience")}
              </em>
            </p>
            <ul className="list-disc pl-5">
              <li>{t2("addressDetails")}</li>
              <li>workostapuk@gmail.com</li>
            </ul>
          </div>

          <h3
            className="
            text-[26px] font-bold relative my-[20px] text-[#050d18]
          "
          >
            {t1("educationName")}
          </h3>
          <div className="custom-resume relative px-[20px] border-l-2 border-l-sky-400 pb-8">
            <h4 className="font-raleway text-[18px] uppercase font-semibold relative bottom-1">
              {t1("education.degree")}
            </h4>
            <h5 className="font-semibold inline-block mb-[10px] px-[15px]">
              {t1("education.years")}
            </h5>
            <p className="mb-[1rem]">
              <em className="">
                {t1("education.institution")}
              </em>
            </p>
            <p>
              {t1("education.details")}
            </p>
          </div>
        </div>
        <div
          className="col-lg-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3
            className="
            text-[26px] font-bold relative my-[20px] text-[#050d18]
          "
          >
            {t1("projects")}
          </h3>

          {experienceArray.map((experience: Experience, index: number) => (
            <div key={index} className="custom-resume relative px-[20px] border-l-2 border-l-sky-400 pb-7">
              <h4 className="font-raleway text-[18px] uppercase font-semibold relative bottom-1">
                {experience.title}
              </h4>
              <h5 className="font-semibold inline-block mb-[10px] px-[15px]">
                {experience.duration}
              </h5>
              <p className="mb-[1rem]">
                <em>{experience.description}</em>
              </p>
              <ul className="list-disc pl-5">
                {experience.responsibilities.map((responsibility: string, idx: number) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full p-2 flex justify-center items-center">
        <a href={"resume.pdf"} download>
          <button
            type="button"
            className="rounded-lg border border-sky-300 bg-sky-400 text-white hover:bg-sky-300 transition duration-300 px-6 py-2"
          >
            {t1("download")}
          </button>
        </a>
      </div>
    </motion.section >
  );
};

export default Resume;
