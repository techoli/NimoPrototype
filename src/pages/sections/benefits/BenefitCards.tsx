import React from "react";
import { BenefitDataTypes } from "../../../types/types";
import DummySlideBtn from "../../components/DummySlideBtn";

const BenefitCards: React.FC<BenefitDataTypes> = ({
  h1,
  h2,
  p1,
  p2,
  img,
  rightrender,
}) => {
  return (
    <div>
      {rightrender ? (
        <div className="   w-full grid grid-cols-[repeat(2,1fr)] gap-[20px]">
          <div className=" w-full pt-28  ">
            <h1 className="font-[poppins] font-[600] text-[42px] text-[rgba(3, 0, 54, 0.74)] mb-8">
              {h1}
            </h1>
            <p className="font-[poppins] font-[600] text-[16px]">{p1}</p>
            {h2 && (
              <h1
                className={` mt-16 font-[poppins] font-[600] text-[42px] text-[rgba(3, 0, 54, 0.74)]`}
              >
                {h2}
              </h1>
            )}
            {p2 && (
              <p className="font-[poppins] font-[600] text-[16px] mt-6">{p2}</p>
            )}
          </div>
          <div className="">
            <img src={img} className=" w-[500px] h-[500px]" />
            <DummySlideBtn />
          </div>
        </div>
      ) : (
        <div className="  w-full grid grid-cols-[repeat(2,1fr)] gap-[20px]">
          <div className="">
            <img src={img} className="w-[500px] h-[500px]" />
            <DummySlideBtn />
          </div>
          <div className=" w-full pt-28">
            <h1 className="font-[poppins] font-[600] text-[42px] text-[rgba(3, 0, 54, 0.74)] mb-8">
              {h1}
            </h1>
            <p className="font-[poppins] font-[600] text-[16px]">{p1}</p>
            {h2 && (
              <h1 className=" mt-16 font-[poppins] font-[600] text-[42px] text-[rgba(3, 0, 54, 0.74)]">
                {h2}
              </h1>
            )}
            {p2 && (
              <p className="font-[poppins] font-[600] text-[16px] mt-6">{p2}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BenefitCards;
