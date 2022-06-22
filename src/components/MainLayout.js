import React from "react";

function MainLayout({ children, isNeedHeader }) {
  return (
    <>
      {
        isNeedHeader &&
        <div className="bg-blue-600 flex flex-row justify-between items-center px-20 py-4">
          <span className="text-white font-semibold text-md sm:text-2xl">
            Solaris Travel
          </span>
          <ul className="flex flex-row gap-4 text-white">
            <li className="font-semibold cursor-pointer">Home</li>
            <li className="font-semibold cursor-pointer">About</li>
          </ul>
        </div>
      }
      <div className="container mx-auto px-10">{children}</div>
    </>
  );
}

export default MainLayout;
