import Image from "next/image";
import { FC, ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const Main: FC = (): ReactElement => {
  return (
    <section className="ml-[300px] lg:ml-0 container-custom relative flex w-full min-h-screen py-[80px] px-5 md:px-10 lg:px-20">
      <Image
        alt="Hero Background"
        width="1280"
        height="720"
        className="absolute inset-0 h-full w-full opacity-70 object-cover z-[1]"
        src={
          "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728333252/download_r3lz5o.jpg"
        }
        
      />
      <div className="flex text-white text-start justify-center m-0 flex-col z-[2]">
        <h1 className="font-bold text-[46px]">
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
            className={`underline underline-offset-4 decoration-blue-400 ${roboto.className}`}
          />
        </p>
      </div>
    </section>
  );
};

export default Main;
