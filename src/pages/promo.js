import { useAmp } from "next/amp";
import React, { useState } from "react";

import MainLayout from "../components/MainLayout";
import Button from "../components/atoms/Button";
import AMPImage from "../components/atoms/AMPImage";

import BookingImage from "../../public/images/booking.svg";
export const config = { amp: "hybrid" };

function FAQ() {
  const isAmp = useAmp();

  // send message to WhatsApp
  const sendMessage = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=+6281218097779&text=Permisi *admin Solaris Jaya*, saya ada pertanyaan...`,
      "_blank"
    );
  };

  return (
    <MainLayout isNeedHeader title="FAQ Page" desc="FAQ Page">
      <section className="relative flex flex-col justify-between items-center md:flex-row">
        <div className="flex flex-col mt-20 justify-center items-center sm:justify-start sm:items-start sm:mt-0">
          <h1 className="text-4xl text-blue-600 font-bold mb-4 sm:text-4xl lg:text-6xl">
            Travelling Packet
          </h1>
          <q className="block mb-10 -mt-2 text-center">
            We offer you travelling packet for individual / group.
          </q>
          <div className="-mt-10 sm:hidden">
            <AMPImage height={400} width={400} src={BookingImage} alt="home-travel" isAmp={isAmp} />
          </div>
          <q className="block text-lg text-black font-bold mb-10 -mt-4 text-center sm:text-left">
            Wanna solo trip with cheap cost for amazing vacation?
            <br /> lets try our travelling packet.
          </q>
        </div>
        <div className="hidden mt-10 sm:block">
            <AMPImage height={400} width={400} src={BookingImage} alt="home-travel" isAmp={isAmp} />
        </div>
      </section>
      <section className="flex justify-center items-center">
        <h1 className="font-semibold text-black text-4xl">There is no packet today :(</h1>
      </section>
    </MainLayout>
  );
}

export default FAQ;
