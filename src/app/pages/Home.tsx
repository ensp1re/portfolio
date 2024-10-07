"use client";

import { FC, ReactElement } from "react";
import LeftSide from "@src/app/pages/components/LeftSide/LeftSide";
import RightSide from "@src/app/pages/components/RightSide/RightSide";

const Home: FC = (): ReactElement => {
  return (
    <>
      <div className="lg:block hidden fixed w-[300px] top-0 left-0 bottom-0 transition ease-in-out delay-300 overflow-y-auto z-50 overflow-hidden bg-[#040b14]">
        <LeftSide />
      </div>
      <div className="lg:ml-[300px] bg-[#040b14]">
        <RightSide />
      </div>
    </>
  );
};

export default Home;
