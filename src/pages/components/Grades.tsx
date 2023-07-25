import React from "react";
import { GradeData } from "../../data/data";

function Grades() {
  return (
    <div className="w-full relative h-[700px]  px-20 py-10 bg-[#F8F4F4] ">
      <h1 className="font-[poppins] font-[600] text-[56px] text-center mb-6">
        We cover different Grades
      </h1>
      <div className="flex justify-between gap-10">
        {GradeData?.map((item, ind) => (
          <div
            className={`h-[462px] w-[375px] rounded-[16px] p-[11px] shadow-md bg-[#FFF] border-solid border-1 border-black ${
              ind === 1 && `h-[487px]`
            }`}
          >
            <div className="h-[284px] w-full  rounded-[8px]">
              <img className="w-full h-full" src={item.img} />
              <h1 className="text-[24px] font-[600] my-3">{item.heading}</h1>
              <p className="text-[16px] font-[500]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grades;
