import Image from "next/image";
import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaLink,
  FaSearchPlus,
  FaTimes,
} from "react-icons/fa";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Link from "next/link";
import { ICardComponent } from "@src/app/interfaces/main.interface";

const Card: FC<ICardComponent> = ({
  title,
  href,
  github,
  images,
}): ReactElement => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fullscreenHandle = useFullScreenHandle();

  const handleFullScreenChange = (fullScreen: boolean) => {
    setIsFullScreen(fullScreen);
    setCurrentImageIndex(0);
  };

  const handleKeyNavigation = useCallback(
    (event: KeyboardEvent) => {
      if (isFullScreen) {
        if (event.key === "ArrowRight") {
          nextImage();
        } else if (event.key === "ArrowLeft") {
          previousImage();
        }
      }
    },
    [isFullScreen, currentImageIndex]
  );

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isFullScreen) {
      window.addEventListener("keydown", handleKeyNavigation);
    } else {
      window.removeEventListener("keydown", handleKeyNavigation);
    }
    return () => window.removeEventListener("keydown", handleKeyNavigation);
  }, [isFullScreen, handleKeyNavigation]);

  let touchStartX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      nextImage();
    } else if (touchStartX - touchEndX < -50) {
      previousImage();
    }
  };

  

  return (
    <li className="relative w-[350px] h-[250px] bg-white shadow-md rounded-md overflow-hidden group m-0 p-0 flex-grow">
      <FullScreen
        className="w-full h-full"
        handle={fullscreenHandle}
        onChange={handleFullScreenChange}
      >
        <div
          className={`w-full h-full ${
            isFullScreen ? "flex items-center justify-center" : ""
          }`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={images[currentImageIndex]}
            alt={title}
            width={1920}
            height={1080}
            className={` object-cover rounded-md transform transition-transform duration-500 ease-in-out ${
              isFullScreen
                ? "fullscreen-image"
                : "w-full h-full group-hover:scale-110"
            }`}
          />
        </div>

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center space-y-4 text-slate-50 text-lg font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 bg-black bg-opacity-30
            ${isFullScreen ? "" : ""}
          `}
        >
          {isFullScreen && images.length > 0 && (
            <FaArrowLeft
              className="absolute left-4 text-3xl cursor-pointer text-gray-400 hover:text-gray-200 transition duration-300"
              onClick={previousImage}
            />
          )}
          {isFullScreen && images.length > 0 && (
            <FaArrowRight
              className="absolute right-4 text-3xl cursor-pointer text-gray-400 hover:text-gray-200 transition duration-300"
              onClick={nextImage}
            />
          )}
          <div className="flex space-x-4">
            {!isFullScreen && (
              <FaSearchPlus
                className="text-2xl cursor-pointer hover:text-sky-400 transition duration-300"
                onClick={() => fullscreenHandle.enter()}
              />
            )}
            {!isFullScreen && (
              <Link href={href || "/"} target="_blank">
                <FaLink className="text-2xl cursor-pointer hover:text-sky-400 transition duration-300" />
              </Link>
            )}
            {!isFullScreen && (
              <Link href={github || "/"} target="_blank">
                <FaGithub className="text-2xl cursor-pointer hover:text-sky-400 transition duration-300" />
              </Link>
            )}
          </div>
          <p className="absolute bottom-0 p-5 text-slate-50">{title}</p>
          {isFullScreen && (
            <FaTimes
              className="absolute top-0 right-4 text-2xl cursor-pointer text-gray-300 hover:text-gray-100 transition duration-300"
              onClick={() => {
                fullscreenHandle.exit();
                setCurrentImageIndex(0);
              }}
            />
          )}
        </div>
      </FullScreen>
    </li>
  );
};

export default Card;
