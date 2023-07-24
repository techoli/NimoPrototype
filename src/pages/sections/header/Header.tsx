import React from "react";
import image from "../../../images/image 35.png";
import image3 from "../../../images/img3.png";
import Button from "../../components/Button";

function Header() {
  const handleClick = () => {
    console.log("Do something");
  };
  return (
    <div className="px-20 py-14 relative w-full h-[vh]  ">
      <div className=" w-full  flex ">
        <div className=" mt-[35px] ">
          <div className="w-[677px]">
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
        <Button text1="Join Discount List" onclick={handleClick} />
      </div>
      <div className="w-[353px]">
        <p className="text-[#EC2958] font-[600] text-[18px]">
          N/B: Joining the discount list is FREE! No advance payment needed
        </p>
      </div>
    </div>
  );
}

export default Header;
