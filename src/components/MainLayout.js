import React from "react";

function MainLayout({ children, isNeedHeader }) {
  return (
    <>
      {
        isNeedHeader &&
        <div className="fixed left-0 right-0 z-[999] bg-blue-600 flex flex-row justify-between items-center px-10 py-4 sm:px-20">
          <span className="text-white font-semibold text-md sm:text-2xl">
            Solaris Travel
          </span>
          <nav>
            <ul className="flex flex-row gap-4 text-white">
              <li className="font-semibold cursor-pointer"><a href="/pending-page">Home</a></li>
              <li className="font-semibold cursor-pointer"><a href="/pending-page">About</a></li>
            </ul>
          </nav>
        </div>
      }
      <div className="container mx-auto px-10 py-10">{children}</div>
    </>
  );
}

export default MainLayout;
