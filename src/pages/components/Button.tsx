import React from "react";
import { button } from "../../types/types";

const Button: React.FC<button> = ({ height, width, text1 }) => {
  return (
    <div
      //   className={`flex justify-center items-center font-[poppins] h-[${height}px] w-[${width}px] bg-[#4F46E5] rounded-[8px] text-[white]`}
      className="flex text-center py-[15px] px-[33px] justify-center items-center font-[poppins] h-full w-full bg-[#4F46E5] rounded-[16px] text-[white] cursor-pointer"
    >
      <p className="text-[16px] font-[500]">{text1}</p>
    </div>
  );
};

export default Button;
