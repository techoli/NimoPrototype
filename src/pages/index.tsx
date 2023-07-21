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
import Benefits from "./components/Benefits";
import Grades from "./components/Grades";
import fire from "../images/fire.png";

function LandingPage() {
  return (
    <div className="w-full max-w-[1440px]  min-w-[1403px] m-[auto]">
      <Header />
      <div className="p-20 relative w-full ">
        <div className=" w-full  flex ">
          <div className=" mt-[85px] ">
            <div className="w-[677px]">
              <div className="flex gap-2 px-1">
                <p className="text-[18px] font-[500] text-[#EC2958]">
                  Coming in September
                </p>
                <img src={fire} />
              </div>

              <h3 className=" font-[poppins] font-[600] text-[64px] drop-shadow-xl">
                Self-tutoring App
                <span className=" font-[Comic Neue] text-[#EC2958]">
                  For <br />
                  Kids And Teens
                </span>
              </h3>
              <div className="mt-2 mb-14 border-l-4  border-[#FBCECE] w-[full] px-2">
                <p className="text-[17px] font-[600]">
                  Introducing our self-tutoring app, an AI tool that empowers
                  primary and secondary school students to independently study
                  their school curriculum and explore extra-curricular lessons
                  with no need for human supervision. It ensures their learning
                  remains on track beyond the classroom.{" "}
                  <a href="#" className="text-[#EC2958]">
                    Read More
                  </a>
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
        <div className="h-[80px] w-[312px]">
          <Button text1="Join Discount List + Get Free E-book" />
        </div>
        <div className="w-[353px]">
          <p className="text-[#EC2958] font-[600] text-[18px]">
            N/B: Joining the discount list is FREE! No advance payment needed
          </p>
        </div>
      </div>
      <PhoneAdvert />
      <Instruction />
      <Benefits />
      <Grades />
    </div>
  );
}

export default LandingPage;
