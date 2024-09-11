import React from "react";
import iphones from "../../assets/images/iphones.png";
import figureBehindIphones from "../../assets/images/figure-behind-iphones.png";
import videoIcon from "../../assets/icons/video-icon.png";
import achievementsHeaderImg from "../../assets/images/achievements-header-img.png";
import gradientBg from "../../assets/images/gradient-bg.png";
import Features from "./Features";

const Home = () => {
  return (
    <div>
      <div className="mt-[6rem] flex">
        <div className="relative">
          <img
            src={gradientBg}
            alt="gradient-bg"
            className="absolute z-[-5] top-[-10rem] right-[-7rem]"
          />
          <h1 className="text-6xl font-bold my-6 z-10">
            Make The Best Financial Decisions
          </h1>
          <p className="my-4">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex gap-3 mt-3">
            <button className="my-auto p-3 bg-black text-white font-semibold rounded transition-all hover:bg-primary hover:text-black">
              Get Started
            </button>
            <button className="flex my-auto transition-all gap-1">
              <img src={videoIcon} alt="video-icon" className="h-6" /> Watch
              Video
            </button>
          </div>
          <img src={achievementsHeaderImg} alt="achievements-header-img" />
        </div>
        <div className="relative">
          <img
            src={gradientBg}
            alt="gradient-bg"
            className="absolute z-[-5] bottom-[-10rem] left-[-3rem]"
          />
          <img src={iphones} alt="Iphones" className="absolute" />
          <img src={figureBehindIphones} alt="figure-behind-iphones" />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Home;
