import React from "react";

const Input = ({ label, placeholder, className, type }) => {
  return (
    <div>
      <div className={`input-box ${className}`}>
        <p className="text-xs text-primary label-text absolute">{label}</p>
        <input
          type={type}
          placeholder={placeholder}
          className=" p-2 w-9/12 outline-none placeholder-black text-base text-greyTwo py-4 px-4 shadow-lg"
        />
      </div>
    </div>
  );
};

export default Input;
