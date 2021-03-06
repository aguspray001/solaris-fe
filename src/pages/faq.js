import { useAmp } from "next/amp";
import React, { useState } from "react";

import MainLayout from "../components/MainLayout";
import Button from "../components/atoms/Button";
import AMPImage from "../components/atoms/AMPImage";

import FAQImage from "../../public/images/faq.svg";
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
            FAQ
          </h1>
          <q className="block mb-10 -mt-2 text-center">
            Frequenly ask question
          </q>
          <div className="-mt-10 sm:hidden">
            <AMPImage height={400} width={400} src={FAQImage} alt="home-travel" isAmp={isAmp} />
          </div>
          <q className="block text-lg text-black font-bold mb-10 -mt-4 text-center sm:text-left">
            We are here to help answering your question,
            <br /> please read our rules carefully.
          </q>
          <Button title={"Contact Us"} isPrimary onClick={sendMessage}></Button>
        </div>
        <div className="hidden mt-10 sm:block">
            <AMPImage height={400} width={400} src={FAQImage} alt="home-travel" isAmp={isAmp} />
        </div>
      </section>
    </MainLayout>
  );
}

export default FAQ;
