import Image from "next/image";
import { FC, ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Main: FC = (): ReactElement => {
  return (
    <section
      id="home"
      className="lg:ml-0 bg-[#040b14] container-custom relative flex w-full min-h-screen py-[80px] px-5 md:px-10 lg:px-20"
    >
      <Image
        alt="Hero Background"
        width="1280"
        height="720"
        className="absolute inset-0 h-full w-full opacity-70 object-cover z-[1]"
        src={
          "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728333252/download_r3lz5o.jpg"
        }
      />
      <motion.div
        initial={{ opacity: 0.3, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex w-full text-white text-start justify-center m-0 flex-col z-[2]"
      >
        <h1 className={`font-bold text-[46px] ${raleway.className}`}>
          Ostapuk <br className="lg:hidden" />
          Oleksandr
        </h1>
        <p className="flex gap-2 text-white text-[26px] flex-column">
          I'm{" "}
          <TypeAnimation
            cursor={true}
            sequence={["a Developer", "a FullStack", "a Freelancer"]}
            repeat={Infinity}
            speed={5}
            wrapper="p"
            className={`underline underline-offset-4 decoration-blue-400`}
          />
        </p>
      </motion.div>
    </section>
  );
};

export default Main;
