import React from "react";
import iphones from "../assets/iphones.png";
import figureBehindIphones from "../assets/figure-behind-iphones.png";
import videoIcon from "../assets/video-icon.png";
import achievementsHeaderImg from "../assets/achievements-header-img.png"

const Home = () => {
  return (
    <div className="flex">
      <div className="mx-[5rem]">
        <h1 className="text-6xl font-bold my-4">
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
            <img src={videoIcon} alt="video-icon" className="h-6" /> Watch Video
          </button>
        </div>
        <img src={achievementsHeaderImg} alt="achievements-header-img"/>
      </div>
      <div>
        <img src={iphones} alt="Iphones" />
        <img src={figureBehindIphones} alt="figure-behind-iphones" />
      </div>
    </div>
  );
};

export default Home;
