import React from "react";
import { button } from "../../types/types";

const ButtonCustom: React.FC<button> = ({
  height,
  width,
  text1,
  text2,
  image,
  bg,
  onclick,
}) => {
  return (
    <div
      className={` items-center gap-5 font-[poppins] text-[18px] p-2 flex h-[${height}px] w-[${width}px] bg-[#2C2C30] rounded-[8px] text-[white] px-7 cursor-pointer`}
      onClick={onclick}
    >
      {image && <img className="h-[24px] w-[24px]" src={image} />}
      <div className="flex flex-col">
        <p className="text-[#DADADA]">{text1}</p>
        <p className="text-[#FFF]">{text2}</p>
      </div>
    </div>
  );
};

export default ButtonCustom;
