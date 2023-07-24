import React from "react";
import image from "../images/image 35.png";
import image2 from "../images/img2.png";
import image3 from "../images/img3.png";
import image4 from "../images/img4.png";
import image5 from "../images/img5.png";
import image6 from "../images/img6.png";
import PhoneAdvert from "./sections/mobileadvert/PhoneAdvert";
import Button from "./components/Button";
import Benefits from "../pages/sections/benefits/Benefits";
import Grades from "./components/Grades";
import Navbar from "./sections/navbar/Navbar";
import TopicsVariety from "./sections/topics/TopicsVariety";
import FAQ from "./sections/faq/FAQ";
import Footer from "./sections/footer/Footer";
import HowItWorks from "./sections/how it works/HowItWorks";
import Header from "./sections/header/Header";

function LandingPage() {
  return (
    <div className="w-full max-w-[1440px]  min-w-[1403px] m-[auto] text-[#5c597d]">
      <Navbar />
      <Header />
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
