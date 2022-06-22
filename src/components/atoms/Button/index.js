import Link from "next/link";
import React from "react";

const Button = ({ type, title, isPrimary, onClick }) => {
  if (type === "internal-link") {
    return (
      <button
        onClick={onClick}
        className={`px-10 py-2 rounded-md ${
          isPrimary
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-white  border-none text-blue-600 hover:text-blue-800"
        }`}
      >
        <Link className="font-semibold">{title}</Link>
      </button>
    );
  } else if (type === "external-link") {
    return (
      <button
        onClick={onClick}
        className={`px-10 py-2 rounded-md ${
          isPrimary
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-white  border-none text-blue-600 hover:text-blue-800"
        }`}
      >
        <a className="font-semibold">{title}</a>
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`px-10 py-2 rounded-md ${
          isPrimary
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-white  border-none text-blue-600 hover:text-blue-800"
        }`}
      >
        <span className="font-semibold">{title}</span>
      </button>
    );
  }
};

export default Button;
