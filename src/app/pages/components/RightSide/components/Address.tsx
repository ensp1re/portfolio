import React, { FC, ReactElement } from "react";
import { FiPhone } from "react-icons/fi";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import GoogleMaps from "./GoogleMaps";

const Address: FC = (): ReactElement => {
  return (
    <address className="not-italic addr-box bg-slate-50 shadow-lg p-10">
      <div className="flex flex-col md:flex-row gap-4 items-center mb-5">
        <div className="flex justify-center text-sky-400 hover:text-sky-50 items-center rounded-full p-2 bg-opacity-92 bg-sky-200 hover:bg-sky-400 transition duration-300 cursor-pointer">
          <TfiLocationPin className="text-lg" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="p-0 text-lg font-bold">Address</h3>
          <p className="text-sm">Lutsk, Ukraine</p>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row gap-4 items-center mb-5">
        <div className="flex justify-center text-sky-400 hover:text-sky-50 items-center rounded-full p-2 bg-opacity-92 bg-sky-200 hover:bg-sky-400 transition duration-300 cursor-pointer">
          <FiPhone className="text-lg " />
        </div>
        <div className="text-center md:text-left">
          <h3 className="p-0 text-lg font-bold">Call Us</h3>
          <p className="text-sm">+1 5589 55488 55</p>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-5">
        <div className="flex justify-center text-sky-400 hover:text-sky-50 items-center rounded-full p-2 bg-opacity-92 bg-sky-200 hover:bg-sky-400 transition duration-300 cursor-pointer">
          <TfiEmail className="text-lg" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="p-0 text-lg font-bold">Email me</h3>
          <p className="text-sm">workostapuk@gmail.com</p>
        </div>
      </div>
      <div className="mt-10 w-full h-[250px]">
        <GoogleMaps lat={50.75932} lng={25.34244} />
      </div>
    </address>
  );
};

export default Address;
