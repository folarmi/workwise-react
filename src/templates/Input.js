import React from "react";

const Input = ({ label, placeholder, className }) => {
  return (
    <div>
      <div className={`input-box ${className}`}>
        <p className="text-xs text-primary label-text absolute">{label}</p>
        <input
          type="text"
          placeholder={placeholder}
          className=" p-2 w-9/12 outline-none placeholder-black text-base text-greyTwo py-4 px-4"
        />
      </div>
    </div>
  );
};

export default Input;
