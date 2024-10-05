import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IIconLink } from "../interfaces/main.interface";

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
