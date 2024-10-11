import React from "react";
import Avatar from "@src/app/pages/components/LeftSide/components/Avatar";
import { IconLinks } from "@src/app/utils/data.utils";
import SocialCircles from "@src/app/pages/components/LeftSide/components/SocialCircles";
import { v4 as uuidv4 } from "uuid";
import { IIconLink } from "@src/app/interfaces/main.interface";
import NavComponent from "@src/app/pages/components/LeftSide/components/NavComponent";

const LeftSide: React.FC = (): React.ReactElement => {
  return (
    <header className="w-full px-[15px] flex h-screen flex-col items-center overflow-hidden">
      <Avatar src="https://res.cloudinary.com/dzivbyc4z/image/upload/v1728663650/avatar_wfztoa.jpg" size={120} alt="avatar" />
      <h1 className="text-2xl text-white mb-[0.67em] mx-0 font-bold isolate">
        Ostapuk Oleksandr
      </h1>
      <div className="flex gap-3 mb-5">
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
      <NavComponent />
    </header>
  );
};

export default LeftSide;
