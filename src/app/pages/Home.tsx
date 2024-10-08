"use client";

import { FC, ReactElement, useEffect, useRef, useState } from "react";
import LeftSide from "@src/app/pages/components/LeftSide/LeftSide";
import RightSide from "@src/app/pages/components/RightSide/RightSide";
import { Raleway } from "next/font/google";
import { useStateContext } from "../context/StateContext";
import { navData } from "../utils/data.utils";
import { FaSpinner } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { MdMenu } from "react-icons/md";

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Home: FC = (): ReactElement => {
  const { setActiveSection, isOpen, setIsOpen } = useStateContext();
  const [loading, setLoading] = useState(true);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  const leftSide = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const menu = document.getElementById("menu");
    const handleClickOutside = (event: MouseEvent) => {
      if (
        leftSide.current &&
        !leftSide.current.contains(event.target as Node) &&
        !menu?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen && !isLgScreen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isLgScreen]);

  const handleScroll = () => {
    const sections: string[] = navData.reduce<string[]>((acc, item) => {
      acc.push(item.href);
      return acc;
    }, []);

    sections.forEach((sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect && rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex w-screen h-screen justify-center items-center bg-slate-50">
          <FaSpinner className="text-sky-400 animate-spin text-6xl" />
        </div>
      ) : (
        <>
          <button
            id="menu"
            className="flex justify-center items-center lg:hidden rounded-full p-1 fixed top-0 right-0 mr-3 mt-3 bg-sky-400 z-[1000]"
            onClick={() => {
              console.log("Button clicked, isOpen:", isOpen); // Проверяем текущее значение isOpen
              setIsOpen(!isOpen); // Меняем состояние
            }}
          >
            <MdMenu className="text-slate-50 text-2xl" />
          </button>

          <Transition
            show={isOpen || isLgScreen}
            enter="transition-transform duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div
              ref={leftSide}
              className={`lg:block fixed w-[300px] top-0 left-0 bottom-0 overflow-y-auto z-50 overflow-hidden bg-[#040b14] ${raleway.className}`}
            >
              <LeftSide />
            </div>
          </Transition>

          <div className={`${isLgScreen ? "lg:ml-[300px]" : ""}`}>
            <RightSide />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
