import { Outlet, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useContext } from "react";
import { UserIdContext } from "@contexts/userId";

const Root = ({ className = "" }) => {
  

  return (
    <div className={`bg-zinc-950 w-full relative text-white ${className}`}>
      <Header />

      <div className="min-h-screen pt-28 px-28">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
