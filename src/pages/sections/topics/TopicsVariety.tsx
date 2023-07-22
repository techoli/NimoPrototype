import React from "react";
import SimpleImageSlide from "../../components/SimpleImageSlide";
import Button from "../../components/Button";
import { GradeData, TopicsData } from "../../../data/data";

function TopicsVariety() {
  return (
    <div className="w-full relative  px-20 py-10">
      <div className="h-[413px] w-full  flex gap-20 justify-evenly">
        <div className=" w-[50%]">
          <div className="w-[90%] mt-10 font-[poppins]">
            {" "}
            <h1 className="font-[600]  text-[56px]">
              A variety of Topics to choose from
            </h1>
            <p className="font-[500] text-[16px]">
              Start learning any subject from the web or app, set a pace and
              stay on track!
            </p>
            <div className="h-[50px] w-[218px] mt-3">
              <Button text1="Get Started" />
            </div>
          </div>
        </div>
        <div className=" w-[50%] flex justify-center ">
          <SimpleImageSlide />
        </div>
      </div>
      <div className="flex justify-between gap-10">
        {TopicsData?.map((item) => (
          <div className="font-[poppins] h-[472px] w-[375px] rounded-[16px] p-[11px] bg-[#FFF] border-solid border-1 border-black">
            <div className="h-[284px] w-full  rounded-[8px] ">
              <img className="w-full h-full" src={item.img} />
            </div>
            <div className="relative  h-[160px]">
              <h1 className="text-[24px] font-[600] my-1">{item.heading}</h1>
              <p className="text-[14px] font-[500]">{item.text}</p>
              <a
                className="absolute  bottom-[3px] text-[18px] font-[500]"
                href="#"
              >
                {" "}
                Get Started &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicsVariety;
