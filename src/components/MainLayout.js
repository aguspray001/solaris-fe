import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { FaTicketAlt } from "react-icons/fa";
import useWindowDimension from "../hooks/useWindow";
import DarkModeButton from "./atoms/DarkModeButton";
import Footer from "./atoms/Footer";

function MainLayout({ children, isNeedHeader, title, desc }) {
  const [width, height] = useWindowDimension();

  return (
    <div className="bg-white dark:bg-slate-700">
      <Head>
        <title>{title} | Solaris Travel</title>
        <meta name="description" content={desc} />
      </Head>
      {isNeedHeader && (
        <header className={`fixed ${width <= 425 ? "bottom-5 shadow-xl": ""} left-2 right-2 z-[999] bg-blue-600 flex justify-center items-center px-10 py-4 rounded-full sm:rounded-none sm:right-0 sm:left-0 sm:px-20 sm:justify-between`}>
          <div className="fixed top-4 right-4">
            <DarkModeButton/>
          </div>
          <span className="text-white font-semibold text-md hidden sm:text-2xl sm:block">
            Solaris Travel
          </span>
          <nav>
            <ul className="flex flex-row gap-20 text-white sm:gap-4">
              <div className="flex justify-center items-center gap-2">
                <Link href={"/"} >
                  <AiFillHome className="block sm:hidden" size={25} />
                </Link>
                <li className="font-semibold cursor-pointer hidden sm:block">
                  <Link href="/">Home</Link>
                </li>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Link href={"/promo"} >
                  <FaTicketAlt className="block sm:hidden" size={25} />
                </Link>
                <li className="font-semibold cursor-pointer hidden sm:block">
                  <Link href="/promo">Promo</Link>
                </li>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Link href={"/faq"} >
                  <AiFillQuestionCircle className="block sm:hidden" size={25} />
                </Link>
                <li className="font-semibold cursor-pointer hidden sm:block">
                  <Link href="/faq">FAQ</Link>
                </li>
              </div>
            </ul>
          </nav>
        </header>
      )}
      <main className="container mx-auto px-10 py-10 -mt-20 mb-20 sm:mb-0 sm:mt-0">{children}</main>
      <Footer/>
    </div>
  );
}

export default MainLayout;
