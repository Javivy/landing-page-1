import React from 'react'
import iphoneFeatures from "../../assets/images/iphone-features-section.png"

const Features = () => {
  return (
    <div className="flex">
      <div>
        <img src={iphoneFeatures} alt="iphoneFeatures" className="h-[60%]" />
      </div>
      <div>
        <span className="uppercase text-primary">Features</span>
      </div>
    </div>
  )
}

export default Features