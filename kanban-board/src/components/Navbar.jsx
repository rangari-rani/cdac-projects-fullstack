import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12"
            src={logo}
            alt="logo"
          />
          <span className="text-xl font-semibold tracking-tight">
            Kanban Board
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
