import React from "react";
import Button from "./Button";
import ButtonCustom from "./ButtonCustom";
import apple from "../../images/apple.png";
import play from "../../images/play.png";
import fire from "../../images/fire.png";

function PhoneAdvert() {
  return (
    <div className="w-full relative bg-[#F8F4F4] h-[449px] px-20 py-10">
      <div className="w-[857px]">
        <h3 className="font-[poppins] text-[48px] font-[500]">
          Begin a seamless learning journey!
        </h3>
        <p className="text-[24px] font-[poppins] mt-5 ">
          Download the app and get easier access to multiple lessons for your
          learning journey
        </p>
      </div>
      <div className="flex gap-10 h-[70px]  mt-32">
        <ButtonCustom
          height={35}
          width={218}
          image={play}
          text1="Get app on 
"
          text2="Google play"
        />
        <ButtonCustom
          image={apple}
          height={35}
          width={218}
          text1="Get app on 
"
          text2="
          apple store"
        />
      </div>
      <div className="flex gap-2 px-1 mt-2">
        <p className="text-[18px] font-[500] text-[#EC2958]">
          Coming in September
        </p>
        <img src={fire} />
      </div>
    </div>
  );
}

export default PhoneAdvert;
