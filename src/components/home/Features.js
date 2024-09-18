import React from "react";
import iphoneFeatures from "../../assets/images/iphone-features-section.png";
import starIcon from "../../assets/icons/star-icon.png";
import cubeIcon from "../../assets/icons/cube-icon.png";
import cubeIconTwo from "../../assets/icons/cube-2-icon.png";
import gradientBg from "../../assets/images/gradient-bg.png";

const Features = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative">
        <img src={iphoneFeatures} alt="iphoneFeatures" className="absolute h-[130%] top-[-3rem]" />
        <img src={gradientBg} alt="gradientBg" className="absolute z-[-10] left-[-7rem]" />
      </div>
      <div className="flex justify-center flex-col my-auto">
        <span className="uppercase text-primary">Features</span>
        <h2 className="font-bold text-6xl mb-5">Uifry Premium</h2>
        <ul className="flex flex-col gap-[3rem]">
          <li className="flex my-auto gap-3 flex-wrap">
            <img src={starIcon} alt="starIcon" className="h-5" /> Budgeting
            Intervals
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </li>
          <li className="flex my-auto gap-3 flex-wrap">
            <img src={cubeIcon} alt="cubeIcon" className="h-5" /> Budgeting
            Intervals
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </li>
          <li className="flex my-auto gap-3 flex-wrap">
            <img src={cubeIconTwo} alt="cubeIconTwo" className="h-5" />{" "}
            Budgeting Intervals
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
