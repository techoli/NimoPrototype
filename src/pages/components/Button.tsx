import React from "react";
import { button } from "../../types/types";

const Button: React.FC<button> = ({ height, width, text1 }) => {
  return (
    <div
      className={`font-[poppins] h-[${height}px] w-[${width}px] bg-[#4F46E5] rounded-[8px] text-[white]`}
    >
      {text1}
    </div>
  );
};

export default Button;
