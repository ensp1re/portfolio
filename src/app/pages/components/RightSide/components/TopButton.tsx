import React, { FC } from "react";
import { FaAngleUp } from "react-icons/fa";

interface ITopButton {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
}

const TopButton: FC<ITopButton> = ({ setActive, onClick }) => {
  return (
    <button
      className="rounded-full text-center p-2 text-lg hover:bg-sky-500 transition duration-300 cursor-pointer bg-sky-400 text-white shadow-md"
      onClick={() => {
        setActive(false);
        onClick();
      }}
    >
      <FaAngleUp />
    </button>
  );
};

export default TopButton;
