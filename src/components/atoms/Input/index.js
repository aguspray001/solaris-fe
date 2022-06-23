import React from "react";

const Input = ({ name, placeHolder, type, value, onChange }) => {

  if (type === "text") {
    return (
      <input
        name={name}
        className="w-full h-10 px-2 mt-2 border border-black rounded-md shadow-md"
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange = {(e)=> onChange(e)}
      ></input>
    );
  }
  else if(type === "date"){
    return (
        <input
          name={name}
          className="w-full h-10 px-2 mt-2 border border-black rounded-md shadow-md"
          type={type}
          placeholder={placeHolder}
          value={value}
          onChange = {(e)=> onChange(e)}
        ></input>
      );
  }
};

export default Input;
