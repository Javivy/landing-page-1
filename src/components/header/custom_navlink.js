import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavlink = ({link, name}) => {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) => {
          if (isPending) {
            return "pending";
          } else if (isActive) {
            return "text-primary font-bold";
          }
        }}
        to={link}
      >
        {name}
      </NavLink>
      <span
        className='h-1 w-[0%] bg-primary transition-all duration-500 group-hover:w-[100%]'
      />
    </>
  );
};

export default CustomNavlink;
