import Head from "next/head";
import React, { useEffect, useState } from "react";

import useWindowDimension from "../hooks/useWindow";
import Footer from "./atoms/Footer";
import Header from "./atoms/Header";

function MainLayout({ children, title, desc }) {
  const [width, height] = useWindowDimension();

  return (
    <div className="bg-white dark:bg-slate-700">
      <Head>
        <title>{title} | Solaris Travel</title>
        <meta name="description" content={desc} />
      </Head>
      <Header width={width}/>
      <main className="container mx-auto px-10 py-10 -mt-20 mb-20 sm:mb-0 sm:mt-0">{children}</main>
      <Footer/>
    </div>
  );
}

export default MainLayout;
