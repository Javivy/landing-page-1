import React from "react";
import logo from "../../assets/images/logo.png";
import CustomNavlink from "../header/custom_navlink";

const Header = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-3">
        <div>
          <img src={logo} alt="logo" className="h-10"></img>
        </div>
        <ul className="flex justify-between gap-3 my-auto font-medium text-[18px]">
          <li className="flex flex-col group">
            <CustomNavlink link="/" name="Home"/>
          </li>
          <li className="flex flex-col group group">
            <CustomNavlink link="/about" name="About Us"/>
          </li>
          <li className="flex flex-col group">
            <CustomNavlink link="/pricing" name="Pricing" />
          </li>
          <li className="flex flex-col group">
            <CustomNavlink link="/features" name="Features" />
          </li>
        </ul>
      </div>
      <div>
        <button className="my-auto p-3 bg-black text-white font-semibold rounded transition-all hover:bg-primary hover:text-black">
          Download
        </button>
      </div>
    </nav>
  );
};

export default Header;
