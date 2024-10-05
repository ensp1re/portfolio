import { IconType } from "react-icons";


export interface IAvatarComponent {
  src: string;
  size: number;
  alt: string;
}

export interface ISocialCircle {
  isBlank: boolean;
  href: string;
  Icon: IconType;
}

export interface IIconLink {
  name: string;
  href: string;
  Icon: IconType;
}
