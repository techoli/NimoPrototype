import React, { useState } from "react";
import slide1 from "../../images/sliderimg/slide1.png";
import slide2 from "../../images/sliderimg/slide2.png";

interface Img {
  images: any[];
}
const images = [slide1, slide2];

const Slider: React.FC<Img> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBulletClick = (index: any) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleBulletClick(index)}
            className={`h-2 w-2 mx-1 rounded-full transition-colors ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
