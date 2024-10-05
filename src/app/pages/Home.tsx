"use client";

import { FC, ReactElement } from "react";
import LeftSide from "@src/app/pages/components/LeftSide/LeftSide";
import RightSide from "@src/app/pages/components/RightSide/RightSide";

const Home: FC = (): ReactElement => {
  return (
    <>
      <div className="w-screen h-screen flex flex-row m-0 p-0">
        <div className="fixed top-0 left-0 bottom-0 transition ease-in-out delay-300 overflow-y-auto z-50 px-12  bg-[#040b14]">
          <LeftSide />
        </div>
       
        <div className="ml-[300px] flex flex-row p-1">
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Home;
