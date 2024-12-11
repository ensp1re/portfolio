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

export interface INavComponent {
  name: string;
  isActive: boolean;
  href: string;
  Icon: IconType;
}

export interface IInfoItem {
  label: string;
  value: string;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface GeocodeResponse {
  results: {
    geometry: {
      location: ICoordinates;
    };
  }[];
}

export interface IMapComponentProps {
  address: string;
}

export interface ICardComponent {
  title: string;
  href: string;
  images: string[];
  github: string;
  category?: string;
}


export interface IEmailDocument {
  firstName:  string;
  lastName:  string;
  email:  string;
  message:  string;
}
