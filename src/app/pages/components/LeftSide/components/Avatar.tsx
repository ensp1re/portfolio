import { FC, ReactElement } from "react";
import Image from "next/image";
import { IAvatarComponent } from "@src/app/interfaces/main.interface";

const Avatar: FC<IAvatarComponent> = ({ src, size, alt }): ReactElement => {
  return (
    <div
      className={`mx-[74.5px] my-3.5 border-8 w-[${size}px] h-[${size}px] border-gray-800 rounded-full`}
    >
      <Image
        src={src ? src : "https://avatars.githubusercontent.com/u/5789927?v=4"}
        alt={alt}
        width={size}
        loading="lazy"
        height={size}
        className="rounded-full w-full h-full object-cover aspect-square"
      />
    </div>
  );
};

export default Avatar;
