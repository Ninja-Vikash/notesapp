import React from "react";
import Header from "../header/Header";

const Root = ({ children, className = "" }) => {
  return (
    <div className={`bg-zinc-950 w-full relative text-white ${className}`}>
      <Header />

      <div className="min-h-screen pt-28 px-28">{children}</div>
    </div>
  );
};

export default Root;
