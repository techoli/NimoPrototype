import React from "react";
import { NavData } from "../../../data/data";
import Button from "../../components/Button";
import logo from "../../../images/tioologo.png";

function Navbar() {
  return (
    <div className="w-full relative h-[70px]  ">
      <img
        src={logo}
        className="absolute left-[22px] top-[5px] w-[130px] h-[100]"
      />
      <div className=" flex w-[650px] m-[auto] h-full  gap-[24px] items-center ">
        {NavData?.map((item) => (
          <a href="#" className="font-[600] font-[poppins] text-[18px]">
            {item.text}
          </a>
        ))}
      </div>

      <div className=" absolute h-[60px] w-[210px] right-[22px] top-[12px] ">
        <Button text1="Join Discount List" />
      </div>
    </div>
  );
}

export default Navbar;
