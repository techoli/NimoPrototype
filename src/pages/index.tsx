import React from "react";
import image from "../images/image 35.png";
import image2 from "../images/img2.png";
import image3 from "../images/img3.png";
import image4 from "../images/img4.png";
import image5 from "../images/img5.png";
import image6 from "../images/img6.png";
import PhoneAdvert from "./components/PhoneAdvert";
import Button from "./components/Button";
import Instruction from "./components/Instruction";
import Header from "./components/Header";

function LandingPage() {
  return (
    <div className="w-full  min-w-[1403px] m-[auto]">
      <Header />
      <div className="p-20 relative w-full ">
        <div className=" w-full  flex ">
          <div className="w-[65%]  ">
            <div className="w-[677px]">
              <h3 className=" font-[poppins] font-[600] text-[64px] drop-shadow-xl">
                AI Self-tutoring App <br />
                <span className=" font-[Comic Neue] text-[#4F46E5]">
                  For Kids And Teens
                </span>
              </h3>
              <div className="mt-10 mb-24 border-l-4  border-[#FBCECE] w-[full] px-2">
                <p className="text-[16px]">
                  Our self-learning platform aims to empower kids and teens by
                  allowing them learn school curriculum and extra curriculum
                  lessons, helping them to keep their learning on track even
                  outside school. Through the use of AI, the platform can adapt
                  to each child's learning style, pace, and preferences,
                  tailoring the content and activities to suit their specific
                  needs.
                </p>
              </div>
            </div>
          </div>

          <img
            className="absolute w-[598.685px] h-[607px] top-[2px] right-[4px]"
            alt="a"
            src={image}
          />

          {/* <h1 className="text-[blue] mt-3">fff</h1> */}
          {/* <img src/>   */}
          <img
            className="absolute w-[89px] h-[89px] top-[20px] right-[598px]"
            alt="a"
            src={image6}
          />
          <img
            className="absolute w-[59px] h-[59px] top-[20px] left-[19px]"
            alt="a"
            src={image5}
          />
          <img
            className="absolute w-[41px] h-[41px] top-[20px] left-[395px]"
            alt="a"
            src={image4}
          />

          <img
            className="absolute w-[92px] h-[92px] bottom-[1px] right-[605px]"
            alt="a"
            src={image2}
          />
          <img
            className="absolute w-[72px] h-[72px] bottom-[20px] right-[15px]"
            alt="a"
            src={image3}
          />
        </div>
        <Button height={50} width={218} text1="Get Started" />
      </div>
      <PhoneAdvert />
      <Instruction />
    </div>
  );
}

export default LandingPage;
