import Image from "next/image";
import { FC, ReactElement } from "react";
import InfoItem from "./InfoItem";
import { motion } from "framer-motion";

const About: FC = (): ReactElement => {
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
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="flex w-full h-full flex-col lg:flex-row gap-[25px]">
        <div className="w-[325px] h-[325px] pr-5 relative aspect-square">
          <Image
            alt="Profile image"
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
            src={
              "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728395259/my-profile-img_z0kdqm.jpg"
            }
          />
        </div>
        <div className="w-full h-full flex flex-col gap-5">
          <h2 className="font-bold text-[26px] text-[#050d18]">
            Web Developer
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
            <InfoItem label="Birthday" value="1 May 1995" />
            <InfoItem label="Website" value="www.example.com" />
            <InfoItem label="Phone" value="+123 456 7890" />
            <InfoItem label="City" value="New York, USA" />
            <InfoItem label="Age" value="30" />
            <InfoItem label="Degree" value="Bachelor" />
          </ul>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
