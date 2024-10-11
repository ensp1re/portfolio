import Image from "next/image";
import { FC, ReactElement, useState } from "react";
import { FaLink, FaSearchPlus, FaTimes } from "react-icons/fa";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { ICardComponent } from "@src/app/interfaces/main.interface";
import Link from "next/link";

const Card: FC<ICardComponent> = ({ title, href, image }): ReactElement => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const fullscreenHandle = useFullScreenHandle();

  return (
    <li className="relative min-w-[300px] h-[270px] bg-white shadow-md rounded-md overflow-hidden group m-0 p-0 flex-grow">
      <FullScreen
        className="w-full h-full"
        handle={fullscreenHandle}
        onChange={(fullScreen: boolean | ((prevState: boolean) => boolean)) => {
          setIsFullScreen(fullScreen);
        }}
      >
        <div className="w-full h-full">
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className={`object-cover w-full h-full rounded-md transform transition-transform duration-500 ease-in-out group-hover:scale-110 ${
              isFullScreen ? "fullscreen-image" : ""
            }`}
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-slate-50 text-lg font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 bg-black bg-opacity-30">
          <div className="flex space-x-4">
            {!isFullScreen && (
              <FaSearchPlus
                className="text-2xl cursor-pointer hover:text-sky-400 transition duration-300"
                onClick={() => {
                  if (fullscreenHandle) {
                    fullscreenHandle.enter();
                  }
                }}
              />
            )}
            {!isFullScreen && (
              <Link href={href ? href : "/"} target="_blank">
                <FaLink className="text-2xl cursor-pointer hover:text-sky-400 transition duration-300" />
              </Link>
            )}
          </div>
          <p className="absolute bottom-0 p-5 text-slate-50">{title}</p>
          {isFullScreen && (
            <FaTimes
              className="absolute top-0 right-4 text-2xl cursor-pointer text-gray-300 hover:text-gray-100 transition duration-300"
              onClick={() => {
                if (fullscreenHandle) {
                  fullscreenHandle.exit();
                }
              }}
            />
          )}
        </div>
      </FullScreen>
    </li>
  );
};

export default Card;
