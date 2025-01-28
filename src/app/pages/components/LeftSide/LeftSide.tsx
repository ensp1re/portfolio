import React from "react";
import Avatar from "@src/app/pages/components/LeftSide/components/Avatar";
import { IconLinks } from "@src/app/utils/data.utils";
import SocialCircles from "@src/app/pages/components/LeftSide/components/SocialCircles";
import { v4 as uuidv4 } from "uuid";
import { IIconLink } from "@src/app/interfaces/main.interface";
import NavComponent from "@src/app/pages/components/LeftSide/components/NavComponent";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";

const LeftSide: React.FC = (): React.ReactElement => {
  const t = useTranslations("personalInfo");

  return (
    <header className="w-full px-[15px] flex h-screen flex-col justify-between overflow-hidden">
      <div className="flex w-full flex-col items-center">
        <Avatar
          src="/avatar.jpeg"
          size={120}
          alt="avatar"
        />
        <h1 className="text-xl text-white mb-[0.67em] mx-0 font-bold isolate">
          {t("name")}
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
      </div>

      <LocaleSwitcher />
    </header>
  );
};

export default LeftSide;
