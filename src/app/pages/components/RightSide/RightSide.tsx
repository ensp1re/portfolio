import { FC, ReactElement } from "react";
import Main from "./components/Main";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const RightSide: FC = (): ReactElement => {
  return (
    <main className="">
      <Main />
      <About />
      <Resume />
      <Skills />
      <Contact />
    </main>
  );
};

export default RightSide;
