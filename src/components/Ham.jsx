import React from "react";

const Ham = ({ isOpen, toggle }) => {
  return (
    <button
    onClick={toggle}
      className=" flex flex-col gap-1.5"
      aria-label="Open menu"
    >
      <span  className={`h-[2px] w-6 bg-black transition-all duration-300
          ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
      <span className={`h-[2px] w-6 bg-black transition-all duration-300
          ${isOpen ? "opacity-0" : ""}`}></span>
      <span  className={`h-[2px] w-6 bg-black transition-all duration-300
          ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
    </button>
  );
};

export default Ham;

