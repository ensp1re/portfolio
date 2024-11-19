import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Resume: FC = (): ReactElement => {
  const t1 = useTranslations("resume");
  const t2 = useTranslations("contact");

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
        {/* <div
          className="col-lg-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3
            className="
            text-[26px] font-bold relative my-[20px] text-[#050d18]
          "
          >
            Professional Experience
          </h3>
          <div className="custom-resume relative px-[20px] border-l-2 border-l-sky-400 pb-7">
            <h4 className="font-raleway text-[18px] uppercase font-semibold relative bottom-1">
              Senior graphic design specialist
            </h4>
            <h5 className="font-semibold inline-block mb-[10px] px-[15px]">
              2019 - Present
            </h5>
            <p className="mb-[1rem]">
              <em>Experion, New York, NY </em>
            </p>
            <ul className="list-disc pl-5">
              <li>
                Lead in the design, development, and implementation of the
                graphic, layout, and production communication materials
              </li>
              <li>
                Delegate tasks to the 7 members of the design team and provide
                counsel on all aspects of the project.{" "}
              </li>
              <li>
                Supervise the assessment of all graphic materials in order to
                ensure quality and accuracy of the design
              </li>
              <li>
                Oversee the efficient use of production project budgets ranging
                from $2,000 - $25,000
              </li>
            </ul>
          </div>

          <div className="custom-resume relative px-[20px] border-l-2 border-l-sky-400">
            <h4 className="font-raleway text-[18px] uppercase font-semibold relative bottom-1">
              Graphic design specialist
            </h4>
            <h5 className="font-semibold inline-block mb-[10px] px-[15px]">
              2017 - 2018
            </h5>
            <p className="mb-[1rem]">
              <em>Stepping Stone Advertising, New York, NY</em>
            </p>
            <ul className="list-disc pl-5">
              <li>
                Developed numerous marketing programs (logos,
                brochures,infographics, presentations, and advertisements).
              </li>
              <li>
                Managed up to 5 projects or tasks at a given time while under
                pressure
              </li>
              <li>
                Recommended and consulted with clients on the most appropriate
                graphic design
              </li>
              <li>
                Created 4+ design presentations and proposals a month for
                clients and account managers
              </li>
            </ul>
          </div>
        </div> */}
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
    </motion.section>
  );
};

export default Resume;
