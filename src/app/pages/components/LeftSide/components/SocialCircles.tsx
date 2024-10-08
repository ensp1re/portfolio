import { ISocialCircle } from "@src/app/interfaces/main.interface";
import Link from "next/link";
import { FC, ReactElement } from "react";

const SocialCircles: FC<ISocialCircle> = ({
  isBlank,
  href,
  Icon,
}): ReactElement => {
  return (
    <Link
      href={href}
      target={isBlank ? "_blank" : ""}
      className="text-lg inline-flex items-center justify-center text-white bg-gray-800 rounded-full text-center w-[40px] h-[40px] hover:bg-[#149ddd] transition ease-in-out delay-75"
    >
      <Icon />
    </Link>
  );
};

export default SocialCircles;
