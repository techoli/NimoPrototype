import React, { useState } from "react";
import image from "../../../images/image 35.png";
import image3 from "../../../images/img3.png";
import Button from "../../components/Button";
import FlashButton from "../../components/FlashBtn";
import CenterModal from "../../components/CenterModal";
import DiscountModal from "../../components/DiscountModals";

function Header() {
  const [active, setActive] = useState(false);
  const [readmore, setReadmore] = useState(false);

  const handleClick = () => {
    console.log("Do something");
  };
  return (
    <>
      <div className="pl-20 py-14 relative w-full h-[vh]     flex  flex-wrap">
        {/* <div className="w-[677px]     flex flex-col"> */}
        <div className="w-[58%]     flex flex-col pt-10">
          <h3 className="font-[poppins] font-[600] text-[54px] drop-shadow-xl leading-[75px]">
            Self-tutoring App
            <span className="font-sans text-[#EC2958] ml-2">
              For <br />
              Kids And Teens
            </span>
          </h3>
          <div className="  mt-2 mb-12 border-l-4 border-[#FBCECE] w-full px-2">
            <p className="text-[17px] font-[500]">
              Introducing our self-tutoring app, an AI tool that empowers
              primary and secondary school students to independently study their
              school curriculum and explore extra-curricular lessons with no
              need for human supervision. It ensures their learning remains on
              track beyond the classroom.{" "}
              {!readmore && (
                <a
                  onClick={() => setReadmore(true)}
                  className="text-[#EC2958] underline cursor-pointer"
                >
                  Read More
                </a>
              )}
            </p>
            {readmore && (
              <p className="text-[17px] font-[500] mt-5">
                Harnessing the capabilities of AI and gamification, our platform
                customizes the learning experience for each child, matching
                their unique learning style, pace, and preferences. This
                personalized approach tailors the content and activities,
                catering precisely to their individual needs.{" "}
                <a
                  onClick={() => setReadmore(false)}
                  className="text-[#EC2958] underline cursor-pointer"
                >
                  Read Less
                </a>{" "}
              </p>
            )}
          </div>
          <div className="w-[292px] h-[80px]     ">
            <FlashButton
              text1="Join Discount List"
              onclick={() => {
                setActive(true);
              }}
            />
            <p className="text-[#EC2958] font-[600] text-[18px]">
              N/B: Joining the discount list is FREE! No advance payment needed
            </p>
          </div>
        </div>

        <img
          // className="w-[587px] h-[607px]     "
          className="w-[42%] h-[507px]     "
          alt="a"
          src={image}
        />

        <img
          className="w-[72px] h-[72px] absolute bottom-[60px] right-[15px]"
          alt="a"
          src={image3}
        />
      </div>
      <CenterModal
        // variant={large}
        isOpen={active}
        onClose={() => {
          setActive(false);
        }}
      >
        <DiscountModal
          close={() => {
            setActive(false);
          }}
        />
      </CenterModal>
    </>
  );
}

export default Header;
