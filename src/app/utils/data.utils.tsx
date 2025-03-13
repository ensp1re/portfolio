import {
  FaBook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaListOl,
  FaPhone,
  FaStar,
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
    name: "Reviews",
    href: "reviews",
    Icon: FaStar,
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
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1729105152/1_fvgymd.png",
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1729105149/4_kd33ur.png",
    ],
    category: "other",
  },
  {
    title: "MShop - E-Commerce Platform",
    href: "http://matrickshop.vercel.app",
    github: "https://github.com/ensp1re/m-shop",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728745996/Screenshot_from_2024-10-12_18-05-46_pbwujo.png",
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1729105151/13_qwcka3.png",
    ],
    category: "ecommerce",
  },
  {
    title: "MChat - Chat Application",
    href: "https://mchat.live",
    github: "https://github.com/ensp1re/m-chat",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728675382/Screenshot_from_2024-10-11_22-35-50_wp3pb1.png",
    ],
    category: "other",
  },
  {
    title: "Temptify - Ai-Powered Image Editor",
    href: "https://temptify.vercel.app",
    github: "https://github.com/ensp1re/temptify",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1730210192/Screenshot_from_2024-10-29_15-54-57_ul8fxw.png",
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1730210192/Screenshot_from_2024-10-29_15-55-24_jumwsr.png",
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1730210192/Screenshot_from_2024-10-29_15-55-40_hhakxl.png",
    ],
    category: "saas",
  },
  {
    title: "Portfolio - Company Website",
    href: "https://gigmee.me/portfolio-lab",
    github: "https://github.com/ensp1re/portfolio-lab",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1731781155/Screenshot_from_2024-11-16_20-17-56_z6zgrp.png",
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1731781155/Screenshot_from_2024-11-16_20-18-11_feluz6.png",
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1731781155/Screenshot_from_2024-11-16_20-18-03_gqu5lk.png",
    ],
    category: "landing",
  },
  {
    title: "Goodlyfe - Training Platform",
    href: "https://goodlyfe.vercel.app",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1733906984/goodlyfe_dx3cao.png",
    ],
    github: "https://github.com/ensp1re/Goodlyfe",
    category: "landing",
  },

  {
    title: "Acreative - Creative Agency",
    href: "https://acreative.vercel.app",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1733906983/acreative_w0fdvs.png",
    ],
    github: "https://github.com/ensp1re/Agency-Creative",
    category: "landing",
  },
  {
    title: "Green Bank - Banking Platform",
    href: "https://green-bank-phi.vercel.app/",
    github: "https://github.com/ensp1re/Green-Bank",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1733906983/greenbank_p9q46b.png",
    ],
    category: "landing",
  },

  {
    title: "Personal Portfolio - Portfolio Website",
    href: "https://personal-portfolio-coral-three.vercel.app/",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1733909893/Screenshot_from_2024-12-11_11-36-49_h1wtqi.png",
    ],
    github: "https://github.com/ensp1re/Personal-Portfolio",
    category: "landing",
  },
  {
    title: "Manager - Task Manager",
    href: "https://cryptotimes.vercel.app/",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1735934120/a1_aruo72.png",
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1735934120/a2_ymw1h9.png",
    ],
    github: "https://github.com/ensp1re/CryptoManager",
    category: "other",
  },
  {
    title: "BeAura - AI-Powered haircut changer",
    href: "/",
    images: [
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1741905740/ai_dc2kfi.png",
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1741905739/ai3_zvufrq.png",
      "https://res.cloudinary.com/dzivbyc4z/image/upload/v1741905740/ai2_cxqjf1.png",
    ],
    github: "https://github.com/ensp1re/beaura-client",
    category: "saas",
  }

  // {
  //   title: "MSocial - Social Media Platform",
  //   href: "https://msocial.live",
  //   github: "",
  //   image:
  //     "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728663670/Screenshot_from_2024-10-11_19-18-00_xv6u7z.png",
  // },
];
