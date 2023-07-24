import React from "react";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import four from "./images/4.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

function HowItWorks() {
  return (
    <div className=" w-full h-[559px] bg-[#F8F4F4] px-20 py-10  relative">
      <h1 className="font-[600] text-[32px] text-[#4F46E5]">
        How It Works &rarr;
      </h1>
      <div className="w-[500px] h-[121px]   absolute top-[70px] left-[480px] flex gap-5 items-center">
        <img
          className="h-[40px] w-[40px] absolute top-[-15px] left-[-15px]"
          src={one}
        />
        <img className="h-full w-[132px]" src={img1} />
        <p className="font-[500] text-[24px]">Sign your child up on Tioo </p>
      </div>
      <div className="w-[500px] h-[121px]   absolute bottom-[70px] left-[480px] flex  gap-5 items-center">
        <img
          className="h-[40px] w-[40px] absolute top-[-15px] left-[-15px]"
          src={three}
        />
        <img className="h-full w-[132px]" src={img3} />
        <p className="font-[500] text-[24px]">
          Choose a lesson and start learning!{" "}
        </p>
      </div>
      <div className="w-[500px] h-[121px]   absolute top-[220px] left-[90px]  flex gap-5 items-center">
        <img
          className="h-[40px] w-[40px] absolute top-[-15px] left-[-15px]"
          src={four}
        />
        <img className="h-full w-[132px]" src={img4} />
        <p className="font-[500] text-[24px]">
          Enjoy game-like lesson slides and real-time feedback!{" "}
        </p>
      </div>
      <div className="w-[500px] h-[121px]   absolute top-[220px] right-[90px] flex gap-5 items-center">
        <img
          className="h-[40px] w-[40px] absolute top-[-15px] left-[-15px]"
          src={two}
        />
        <img className="h-full w-[132px]" src={img2} />
        <p className="font-[500] text-[24px]">
          Get access to school curriculum and co-curriculum contents
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
