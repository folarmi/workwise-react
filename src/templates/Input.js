import React from "react";

const Input = ({ label, placeholder, className, type }) => {
  return (
    <div className={`input-box shadow-lg ${className}`}>
      <p className="text-xs text-primary label-text absolute">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 ${className}`}
      />
    </div>
  );
};

export default Input;
