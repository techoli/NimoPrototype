import React from "react";
import image from "../images/image 35.png";
import image2 from "../images/img2.png";
import image3 from "../images/img3.png";
import image4 from "../images/img4.png";
import image5 from "../images/img5.png";
import image6 from "../images/img6.png";
import PhoneAdvert from "./sections/mobileadvert/PhoneAdvert";
import Button from "./components/Button";
import Instruction from "./sections/instruction/Instruction";
import Header from "./components/Header";
// import Benefits from "./sections/Benefits";
import Benefits from "../pages/sections/benefits/Benefits";
import Grades from "./components/Grades";
import fire from "../images/fire.png";
import Navbar from "./sections/navbar/Navbar";
import TopicsVariety from "./sections/topics/TopicsVariety";
import FAQ from "./sections/faq/FAQ";
import Footer from "./sections/footer/Footer";
import HowItWorks from "./sections/how it works/HowItWorks";

function LandingPage() {
  return (
    <div className="w-full max-w-[1440px]  min-w-[1403px] m-[auto] text-[#5c597d]">
      <Navbar />
      <div className="px-20 py-14 relative w-full h-[vh]  ">
        <div className=" w-full  flex ">
          <div className=" mt-[35px] ">
            <div className="w-[677px]">
              <div className="flex gap-2 px-1">
                <p className="text-[18px] font-[500] text-[#EC2958] leading-none] ">
                  Coming in September
                </p>
                <img src={fire} />
              </div>

              <h3 className=" font-[poppins] font-[600] text-[64px] drop-shadow-xl leading-normal">
                Self-tutoring App
                <span className=" font-[Comic Neue] text-[#EC2958] ml-2">
                  For <br />
                  Kids And Teens
                </span>
              </h3>
              <div className="mt-2 mb-12 border-l-4  border-[#FBCECE] w-[full] px-2">
                <p className="text-[17px] font-[500]">
                  Introducing our self-tutoring app, an AI tool that empowers
                  primary and secondary school students to independently study
                  their school curriculum and explore extra-curricular lessons
                  with no need for human supervision. It ensures their learning
                  remains on track beyond the classroom.{" "}
                  <a href="#" className="text-[#EC2958] underline">
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
          {/* <img
            className="absolute w-[71px] h-[71px] top-[20px] right-[598px]"
            alt="a"
            src={image6}
          /> */}
          {/* <img
            className="absolute w-[28px] h-[28px] top-[60px] left-[10px]"
            alt="a"
            src={image5}
          /> */}
          {/* <img
            className="absolute w-[41px] h-[41px] top-[20px] left-[395px]"
            alt="a"
            src={image4}
          /> */}

          {/* <img
            className="absolute w-[92px] h-[92px] bottom-[40px] right-[605px]"
            alt="a"
            src={image2}
          /> */}
          <img
            className="absolute w-[72px] h-[72px] bottom-[60px] right-[15px]"
            alt="a"
            src={image3}
          />
        </div>
        <div className="h-[80px] w-[312px]">
          <Button text1="Join Discount List" />
        </div>
        <div className="w-[353px]">
          <p className="text-[#EC2958] font-[600] text-[18px]">
            N/B: Joining the discount list is FREE! No advance payment needed
          </p>
        </div>
      </div>
      <HowItWorks />
      {/* <PhoneAdvert />
      <Instruction /> */}
      <Benefits />
      <Grades />
      <TopicsVariety />
      <FAQ />
      <Footer />
    </div>
  );
}

export default LandingPage;
