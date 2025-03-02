import { FC, ReactElement, useEffect, useState } from "react";
import { lazy, Suspense } from "react";

import Main from "@src/app/pages/components/RightSide/components/Main";
import About from "@src/app/pages/components/RightSide/components/About";
const Resume = lazy(() => import("@src/app/pages/components/RightSide/components/Resume"));
const Skills = lazy(() => import("@src/app/pages/components/RightSide/components/Skills"));
const Contact = lazy(() => import("@src/app/pages/components/RightSide/components/Contact"));
const TopButton = lazy(() => import("@src/app/pages/components/RightSide/components/TopButton"));
const Projects = lazy(() => import("@src/app/pages/components/RightSide/components/Projects"));
const Footer = lazy(() => import("@src/app/pages/components/RightSide/components/Footer"));
const TestimonialSection = lazy(() => import("@src/app/pages/components/AdminSide/TestimonialSection"));

const RightSide: FC = (): ReactElement => {
  const [activeTopBtn, setActiveTopBtn] = useState<boolean>(false);

  const onTopBtn = () => {
    if (window.scrollY > window.innerHeight) {
      setActiveTopBtn(true);
    } else {
      setActiveTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onTopBtn);
    return () => {
      window.removeEventListener("scroll", onTopBtn);
    };
  }, []);

  return (
    <main className="">
      <Main />
      <About />
      <Suspense>
        <Resume />
        <Skills />
        <Projects />
        <TestimonialSection />
        <Contact />
        <Footer />
      </Suspense>
      {activeTopBtn && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4">
          <TopButton
            setActive={setActiveTopBtn}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      )}
    </main>
  );
};

export default RightSide;
