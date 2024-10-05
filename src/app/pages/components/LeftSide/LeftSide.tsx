import React from "react";
import Avatar from "./components/Avatar";
import { IconLinks } from "@src/app/utils/data.utils";
import SocialCircles from "./components/SocialCircles";
import { v4 as uuidv4 } from "uuid";
import { IIconLink } from "@src/app/interfaces/main.interface";

const LeftSide: React.FC = (): React.ReactElement => {
  return (
    <header className="">
      <div className=" flex h-screen w-full flex-col items-center py-6">
        <Avatar src="" size={130} alt="avatar" />
        <h1 className="text-2xl text-white my-[0.67em] mx-0 font-bold isolate">
          Ostapuk Oleksandr
        </h1>
        <div className="flex gap-3">
          {IconLinks &&
            IconLinks.map((item: IIconLink) => {
              return (
                <SocialCircles
                  key={uuidv4()}
                  Icon={item.Icon}
                  href={item.href}
                  isBlank={true}
                />
              );
            })}
        </div>
        <h1>Nav</h1>
      </div>
    </header>
  );
};

export default LeftSide;
