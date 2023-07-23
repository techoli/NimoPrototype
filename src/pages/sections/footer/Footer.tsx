import React from "react";
import ButtonCustom from "../../components/ButtonCustom";
import apple from "../../../images/apple.png";
import play from "../../../images/play.png";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import logo from "../../../images/tioologo.png";

function Footer() {
  return (
    <div className="bg-[#FAFAFA]  w-full relative  px-20 mt-12 mb-5   font-[poppins]  ">
      <div className="flex border-b-2 border-[#CECDFD] w-full">
        <div className="w-[15%]">
          <img
            className="w-[160px] h-[124px] absolute top-9 left-5"
            src={logo}
          />
        </div>
        <div className=" flex mt-[5rem]  gap-14 w-[85%]  mb-[20px]   justify-evenly">
          <div className="h-full w-[50%]  ">
            <div className="flex gap-5">
              <a className="font-[500] text-[20px]" href="#">
                About
              </a>
              <a className="font-[500] text-[20px]" href="#">
                Privacy
              </a>
              <a className="font-[500] text-[20px]" href="#">
                Terms
              </a>
            </div>
            <div className="flex gap-10  h-[75%] ">
              <ButtonCustom
                height={15}
                width={190}
                image={play}
                text1="Get app on"
                text2="Google play"
              />
              <ButtonCustom
                image={apple}
                height={25}
                width={190}
                text1="Get app on"
                text2="apple store"
              />
            </div>
          </div>
          <div className="h-full w-[50%]  flex flex-col justify-center items-end">
            <div className="flex  gap-3 w-[130px] items-end justify-end">
              <AiOutlineTwitter />
              <SlSocialLinkedin />
              <AiOutlineInstagram />
              <BsFacebook />
            </div>
            <div className=" w-[418px] flex items-end">
              <p className="font-[400] text-[18px] text-right">
                3 Atabara Street, off cairo street, Ademola Adetukonbo,
                Crescent, Wuse 2, Abuja, FCT
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <p className="text-center">
          ©️2023 Praxeum Limited. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
