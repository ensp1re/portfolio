import { IInfoItem } from "@src/app/interfaces/main.interface";
import Link from "next/link";
import React, { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";

const InfoItem: FC<IInfoItem> = ({ label, value }) => (
  <li className="flex items-center gap-1 whitespace-nowrap overflow-hidden text-ellipsis">
    <FaAngleLeft className="text-sky-400 flex-shrink-0" />
    {label === "Website" ? (
      <>
        <span className="font-bold whitespace-nowrap flex-shrink-0">{label}:</span>
        <Link href={`https://${value}`} target="_blank" className="overflow-hidden text-ellipsis">
          {value}
        </Link>
      </>
    ) : (
      <>
        <span className="font-bold whitespace-nowrap flex-shrink-0">{label}: </span>
        <span className="overflow-hidden text-ellipsis">{value}</span>
      </>
    )}
  </li>
);

export default InfoItem;
