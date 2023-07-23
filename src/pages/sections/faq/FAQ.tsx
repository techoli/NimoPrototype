import React, { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

const itemfordrop = [
  {
    id: 1,
    heading: "How does it work",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 2,
    heading: "Who can Use Tioo?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 3,
    heading: "What is the difference between Tioo and Praxeum?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 4,
    heading: "What can I learn on Tioo?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 5,
    heading: "How can I cancel?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
];
interface dropItem {
  ind: number;
  id: number;
  heading: string;
  text: string;
}
function FAQ() {
  const [open, setOpen] = useState<boolean[]>([]);
  const toggleOpen = (index: any) => {
    setOpen((prevOpen) => {
      const updatedOpen = [...prevOpen];
      updatedOpen[index] = !updatedOpen[index];
      return updatedOpen;
    });
  };
  const DropItem: React.FC<dropItem> = ({ ind, id, heading, text }) => {
    const isOpen = open[ind];
    return (
      <div className="w-full border-b-2 border-[#CECDFD]">
        <div
          className=" cursor-pointer h-[100px]  flex items-center gap-8 "
          onClick={() => toggleOpen(ind)}
        >
          {isOpen ? <AiOutlineDown /> : <AiOutlineRight />}
          <p>{heading}</p>
        </div>
        {/* This will show the content */}
        {isOpen && (
          <div className="h-[200px] w-full px-12">
            <p>{text}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full relative  px-20 py-10 font-[poppins]  ">
      <h1 className=" font-[500] text-[48px]">Frequently Asked Questions</h1>
      <div className="bg-[#FFF] rounded-[8px] p-10 mt-10 m-[auto]  w-[1123px] shadow-md border">
        {/* Heading */}
        <div className="w-full h-[80px]  flex justify-center  ">
          <div className="w-[80%] h-[90%] flex justify-between">
            <div className=" h-full font-[600] text-[18px]">Membership</div>
            <div className=" h-full font-[600] text-[18px]">Tioo App</div>
            <div className=" h-full font-[600] text-[18px]">
              Privacy/Security
            </div>
            <div className=" h-full font-[600] text-[18px]">
              Reyurn/Refund Policy
            </div>
          </div>
        </div>
        {/* content */}
        {itemfordrop?.map((el, index) => (
          <DropItem
            ind={index}
            id={el.id}
            text={el.text}
            heading={el.heading}
          />
        ))}
        <div className="w-full  text-center mt-7">
          <p>Other questions?</p>
          <p>
            Email{" "}
            <a className="text-[#4F46E5]" href="#">
              support@praxeum.ai
            </a>{" "}
            or text +234 701 848 1060
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
