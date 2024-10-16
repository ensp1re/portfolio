import {
  FaBook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaListOl,
  FaPhone,
  FaTelegram,
  FaUser,
  FaUserGraduate,
} from "react-icons/fa";
import {
  ICardComponent,
  IIconLink,
  INavComponent,
} from "@src/app/interfaces/main.interface";

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
    name: "Projects",
    href: "projects",
    Icon: FaListOl,
    isActive: false,
  },
  {
    name: "Contact",
    href: "contact",
    Icon: FaPhone,
    isActive: false,
  },
];

export const projectData: ICardComponent[] = [
  {
    title: "Gigmee - Freelance Marketplace",
    href: "https://gigmee.live",
    github: "https://github.com/ensp1re/gigmee",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728663670/Screenshot_from_2024-10-11_19-18-00_xv6u7z.png",
      https://res.cloudinary.com/dzivbyc4z/image/upload/v1729105152/1_fvgymd.png
            "https://res.cloudinary.com/dzivbyc4z/image/upload/v1729105149/4_kd33ur.png",
    ],
  },
  {
    title: "MShop - E-Commerce Platform",
    href: "http://matrickshop.vercel.app",
    github: "https://github.com/ensp1re/m-shop",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728745996/Screenshot_from_2024-10-12_18-05-46_pbwujo.png",
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1729105151/13_qwcka3.png",
    ],
  },
  {
    title: "MChat - Chat Application",
    href: "https://mchat.live",
    github: "https://github.com/ensp1re/m-chat",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728675382/Screenshot_from_2024-10-11_22-35-50_wp3pb1.png",
    ],
  },
  // {
  //   title: "MSocial - Social Media Platform",
  //   href: "https://msocial.live",
  //   github: "",
  //   image:
  //     "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728663670/Screenshot_from_2024-10-11_19-18-00_xv6u7z.png",
  // },
];
