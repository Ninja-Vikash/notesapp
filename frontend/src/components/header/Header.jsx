import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-[100%] absolute pt-12 px-28 flex justify-between">
      <h2 className="text-lg font-bold">NotesApp</h2>

      <nav className="flex gap-6">
        <NavLink
          className={
            pathname === "/"
              ? "text-yellow-400 underline underline-offset-4"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/notes"
          className={
            pathname === "/notes"
              ? "text-yellow-400 underline underline-offset-4"
              : ""
          }
        >
          Notes
        </NavLink>
        <NavLink
          className={
            pathname === "/create"
              ? "text-yellow-400 underline underline-offset-4"
              : ""
          }
          to="/create"
        >
          Create
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
