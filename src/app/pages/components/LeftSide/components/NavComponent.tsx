import React from "react";
import Link from "next/link";
import { navData } from "@src/app/utils/data.utils";
import { INavComponent } from "@src/app/interfaces/main.interface";
import { useStateContext } from "@src/app/context/StateContext";
import { useTranslations } from "next-intl";

const NavComponent = () => {
  const { activeSection, setActiveSection, setIsOpen } = useStateContext();
  

  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const t = useTranslations("nav");

  const updatedNavData = navData.map((item: INavComponent) => {
    return {
      ...item,
      name: t(item.name.toLowerCase()),
    };
  });

  return (
    <nav className="flex items-center whitespace-nowrap transition duration-300 w-full text-nav-color font-poppins text-[16px] font-normal">
      <ul className="list-none">
        {updatedNavData &&
          updatedNavData.map((item: INavComponent) => (
            <li className="p-0 m-0 isolate" key={item.href}>
              <Link
                href="#"
                className={`flex text-[16px] text-[#a8a9b4] items-center w-full py-[15px] px-2.5`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                  setIsOpen(false);
                }}
              >
                <item.Icon
                  className={`text-[20px] font-poppins font-normal ${
                    activeSection === item.href ? "text-[#149ddd]" : ""
                  } mr-[10px]`}
                />
                <span
                  className={`${
                    activeSection === item.href ? "text-white" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavComponent;
