import { IInfoItem } from "@src/app/interfaces/main.interface";
import Link from "next/link";
import React, { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";

const InfoItem: FC<IInfoItem> = ({ label, value }) => (
  <li className="flex items-center gap-1">
    <FaAngleLeft className="text-sky-400" />
    {label === "Website" ? (
      <>
        <span className="font-bold">{label}:</span>

        <Link href={`https://${value}`} target="_blank">
          {value}
        </Link>
      </>
    ) : (
      <>
        <span className="font-bold">{label}: </span> {value}
      </>
    )}
  </li>
);

export default InfoItem;
