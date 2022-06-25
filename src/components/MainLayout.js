import Head from "next/head";
import Link from "next/link";
import React from "react";

function MainLayout({ children, isNeedHeader, title, desc }) {
  return (
    <>
      <Head>
        <title>{title} | Solaris Travel</title>
        <meta name="description" content={desc} />
      </Head>
      {
        isNeedHeader &&
        <div className="fixed left-0 right-0 z-[999] bg-blue-600 flex flex-row justify-between items-center px-10 py-4 sm:px-20">
          <span className="text-white font-semibold text-md sm:text-2xl">
            Solaris Travel
          </span>
          <nav>
            <ul className="flex flex-row gap-4 text-white">
              <li className="font-semibold cursor-pointer"><Link href="/">Home</Link></li>
              <li className="font-semibold cursor-pointer"><Link href="/promo">Promo</Link></li>
              <li className="font-semibold cursor-pointer"><Link href="/faq">FAQ</Link></li>
            </ul>
          </nav>
        </div>
      }
      <main className="container mx-auto px-10 py-10">{children}</main>
    </>
  );
}

export default MainLayout;
