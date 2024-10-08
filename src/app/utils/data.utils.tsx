import {
  FaBook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaUser,
  FaUserGraduate,
} from "react-icons/fa";
import { IIconLink, INavComponent } from "../interfaces/main.interface";
import { FaMessage } from "react-icons/fa6";

export const IconLinks: IIconLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/ensp1re",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ostapuk/",
    Icon: FaLinkedin,
  },
  {
    name: "Telegram",
    href: "https://t.me/bm4kS",
    Icon: FaTelegram,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    Icon: FaInstagram,
  },
];

export const navData: INavComponent[] = [
  {
    name: "Home",
    href: "home",
    Icon: FaHome,
    isActive: false,
  },
  {
    name: "About",
    href: "about",
    Icon: FaUser,
    isActive: false,
  },
  {
    name: "Resume",
    href: "resume",
    Icon: FaBook,
    isActive: false,
  },
  {
    name: "Skills",
    href: "skills",
    Icon: FaUserGraduate,
    isActive: false,
  },
  {
    name: "Contact",
    href: "contact",
    Icon: FaPhone,
    isActive: false,
  },
];
