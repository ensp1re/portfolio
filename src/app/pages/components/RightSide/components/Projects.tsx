import React, { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Projects: FC = (): ReactElement => {
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
        Projects
      </h2>
      <ul className="flex flex-wrap w-full list-none m-0 p-0 gap-6 justify-between">
        <Card
          title="Lorem ipsum, dolor sit amet consectetur."
          href="https://www.google.com"
          image="https://res.cloudinary.com/dzivbyc4z/image/upload/v1716049020/samples/balloons.jpg"
        />
        <Card
          title="Lorem ipsum, dolor sit amet consectetur."
          href="https://www.google.com"
          image="https://res.cloudinary.com/dzivbyc4z/image/upload/v1716049020/samples/balloons.jpg"
        />
        <Card
          title="Lorem ipsum, dolor sit amet consectetur."
          href="https://www.google.com"
          image="https://res.cloudinary.com/dzivbyc4z/image/upload/v1716049020/samples/balloons.jpg"
        />
        <Card
          title="Lorem ipsum, dolor sit amet consectetur."
          href="https://www.google.com"
          image="https://res.cloudinary.com/dzivbyc4z/image/upload/v1716049020/samples/balloons.jpg"
        />
        <Card
          title="Lorem ipsum, dolor sit amet consectetur."
          href="https://www.google.com"
          image="https://res.cloudinary.com/dzivbyc4z/image/upload/v1716049020/samples/balloons.jpg"
        />
        <Card
          title="Lorem ipsum, dolor sit amet consectetur."
          href="https://www.google.com"
          image="https://res.cloudinary.com/dzivbyc4z/image/upload/v1716049020/samples/balloons.jpg"
        />
      </ul>
    </motion.section>
  );
};

export default Projects;
