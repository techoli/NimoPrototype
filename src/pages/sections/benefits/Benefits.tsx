import React from "react";
import img from "../../images/universe.png";
import { BenefitData } from "../../../data/data";
import BenefitCards from "./BenefitCards";
import ButtonCustom from "../../components/ButtonCustom";
import apple from "../../../images/apple.png";
import play from "../../../images/play.png";
import fire from "../../../images/fire.png";

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
      <div className="flex gap-2 px-1 mb-4">
        <p className="text-[18px] font-[500] text-[#EC2958] leading-none] ">
          Coming in September
        </p>
        <img src={fire} />
      </div>
      <div className="flex gap-10  h-[75%] ">
        <ButtonCustom
          height={15}
          width={190}
          image={play}
          text1="Get app on"
          text2="Google play"
          bg={"2C2C30"}
        />
        <ButtonCustom
          image={apple}
          height={25}
          width={190}
          text1="Get app on"
          text2="apple store"
          bg={"2C2C30"}
        />
      </div>
    </div>
  );
}

export default Benefits;
