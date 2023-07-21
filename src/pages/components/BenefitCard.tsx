import React from "react";
import { BenefitDataTypes } from "../../types/types";

const BenefitCard: React.FC<BenefitDataTypes> = ({
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
        <div className="w-full grid grid-cols-[repeat(2,1fr)] border border-gray-500">
          <div className=" w-full pt-20">
            <h1 className="font-[poppins] font-[600] text-[48px] text-[rgba(3, 0, 54, 0.74)]">
              {h1}
            </h1>
            <p className="font-[poppins] font-[600] text-[16px]">{p1}</p>
            <h1 className=" mt-16 font-[poppins] font-[600] text-[48px] text-[rgba(3, 0, 54, 0.74)]">
              {h2}
            </h1>
            <p className="font-[poppins] font-[600] text-[16px]">{p2}</p>
          </div>
          <div className="">
            <img src={img} className=" w-full" />
          </div>
        </div>
      ) : (
        <div className="w-full grid grid-cols-[repeat(2,1fr)] border border-gray-500">
          <div className="">
            <img src={img} className=" w-full" />
          </div>
          <div className=" w-full pt-20">
            <h1 className="font-[poppins] font-[600] text-[48px] text-[rgba(3, 0, 54, 0.74)]">
              {h1}
            </h1>
            <p className="font-[poppins] font-[600] text-[16px]">{p1}</p>
            <h1 className=" mt-16 font-[poppins] font-[600] text-[48px] text-[rgba(3, 0, 54, 0.74)]">
              {h2}
            </h1>
            <p className="font-[poppins] font-[600] text-[16px]">{p2}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BenefitCard;
