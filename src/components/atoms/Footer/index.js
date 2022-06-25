import React from "react";
import Image from "next/image";
import WonderfulIndonesiaLogo from "../../../../public/images/wonderful-logo.webp";

const Footer = () => {
  return (
    <footer className="flex flex-row bg-blue-700 px-10 py-4">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-around">
        <figure className="w-6/12 mb-4 sm:w-2/12">
          <Image
            className="object-cover"
            src={WonderfulIndonesiaLogo}
            alt="wonderful-logo"
          />
        </figure>
        <div className="w-6/12">
          <p className="text-center text-white">
            Situs ini merupakan situs resmi <strong>PT. Bina Putra Solaris Jaya Group</strong>.
            Semua isi yang tercantum di dalam situs ini bertujuan untuk
            memberikan informasi dan mempermudah customer untuk melakukan
            persewaan bis pariwisata kami.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
