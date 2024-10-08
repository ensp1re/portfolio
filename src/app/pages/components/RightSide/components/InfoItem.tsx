import { IInfoItem } from '@src/app/interfaces/main.interface';
import React, { FC } from 'react'
import { FaAngleLeft } from 'react-icons/fa';

const InfoItem: FC<IInfoItem> = ({ label, value }) => (
    <li className="flex items-center gap-1">
      <FaAngleLeft className="text-sky-400" />
      <span className="font-bold">{label}: </span> {value}
    </li>
  );

export default InfoItem