import { FC, ReactElement, useEffect, useState } from "react";
import Main from "@src/app/pages/components/RightSide/components/Main";
import About from "@src/app/pages/components/RightSide/components/About";
import Resume from "@src/app/pages/components/RightSide/components/Resume";
import Skills from "@src/app/pages/components/RightSide/components/Skills";
// import Contact from "@src/app/pages/components/RightSide/components/Contact";
import TopButton from "@src/app/pages/components/RightSide/components/TopButton";
import Projects from "@src/app/pages/components/RightSide/components/Projects";
import Footer from "@src/app/pages/components/RightSide/components/Footer";

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
      <Resume />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
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
