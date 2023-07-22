import React from "react";
import img from "../../images/universe.png";
import { BenefitData } from "../../../data/data";
import BenefitCards from "./BenefitCards";

function Benefits() {
  return (
    <div className="w-full relative  px-20 py-10 ">
      {BenefitData?.map((item, ind) => (
        <BenefitCards
          key={ind}
          id={item.id}
          h1={item.h1}
          h2={item.h2}
          p1={item.p1}
          p2={item.p2}
          img={item.img}
          rightrender={item.rightrender}
        />
      ))}
    </div>
  );
}

export default Benefits;
