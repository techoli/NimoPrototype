import React from "react";
import num1 from "../../images/1.png";
import bg from "../../images/bgmc.png";
import Button from "./Button";
import { InstructionData } from "../../data/data";

function Instruction() {
  return (
    <div className="h-[816px] w-full bg-[#FFEBE9] pt-32 relative">
      <img src={bg} className="absolute rotate-[]  top-[0px]" />
      <div className="w-[50%] ml-[30rem] pl-[50px] ">
        <h1 className="text-[56px] font-[poppins] font-[600] mb-10">
          How It Works
        </h1>
        <ol className="  list-none leading-[normal] mb-16">
          {InstructionData?.map((item) => (
            <li className="mt-2">
              <div className="flex gap-8 items-center">
                <img className="w-[80px] h-[80px]" src={item.image} />
                <p className="font-[poppins] text-[24px] leading-normal font-[500]">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <Button height={50} width={218} text1="Get Started" />
      </div>
    </div>
  );
}

export default Instruction;
