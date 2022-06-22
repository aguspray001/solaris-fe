import React from "react";

const Input = ({ placeHolder, type, value, onChange }) => {
  if (type === "text") {
    return (
      <input
        className="w-full h-10 px-2 mt-2 border border-black rounded-md shadow-md"
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange = {(e)=> onChange(e.value)}
      ></input>
    );
  }
  else if(type === "date"){
    return (
        <input
          className="w-full h-10 px-2 mt-2 border border-black rounded-md shadow-md"
          type={type}
          placeholder={placeHolder}
          value={value}
          onChange = {(e)=> onChange(e.value)}
        ></input>
      );
  }
};

export default Input;
