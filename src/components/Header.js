import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-3">
        <div>
          <img src={logo} alt="logo" className="h-10"></img>
        </div>
        <ul className="flex justify-between gap-3 my-auto font-medium">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary font-semibold"
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary font-semibold"
                  : ""
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary font-semibold"
                  : ""
              }
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary font-semibold"
                  : ""
              }
              to="/features"
            >
              Features
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className="my-auto p-3 bg-black text-white font-semibold rounded transition-all hover:bg-primary hover:text-black">Download</button>
      </div>
    </nav>
  );
};

export default Header;
