import React, { useState } from "react";
import Link from "next/link";
import { navData } from "@src/app/utils/data.utils";

const NavComponent = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <>
      <nav
        className="`flex items-center whitespace-nowrap transition duration-300 w-full 
                    text-nav-color 
                    font-poppins text-[16px] font-normal 
                    "
      >
        <ul className="list-none">
          {navData &&
            navData.map((item) => {
              return (
                <li className="p-0 m-0 isolate" key={item.href}>
                  <Link
                    className={`${
                      activeLink === item.href ||
                      window.location.href.includes(item.href)
                        ? "text-white"
                        : ""
                    } flex text-[16px] text-[#a8a9b4] items-center w-full py-[15px] px-2.5`}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    <item.Icon
                      className={`text-[20px] font-poppins font-normal ${
                        activeLink === item.href ? "text-[#149ddd]" : ""
                      } mr-[10px]`}
                    />
                    <span
                      className={`${
                        activeLink === item.href ||
                        window.location.href.includes(item.href)
                          ? "text-white"
                          : ""
                      } `}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </>
  );
};

export default NavComponent;
