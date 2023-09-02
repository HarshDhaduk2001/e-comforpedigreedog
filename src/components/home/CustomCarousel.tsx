/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Poster1 from "../../assets/images/Poster1.png";
import Poster2 from "../../assets/images/Poster2.png";
import Poster3 from "../../assets/images/Poster3.png";
import Poster4 from "../../assets/images/Poster4.png";

const images = [Poster1.src, Poster2.src, Poster3.src, Poster4.src];

const CustomCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    const startAutoSwipe = () => {
      interval = setInterval(() => {
        if (!isHovered) {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 2000);
    };

    startAutoSwipe();

    return () => {
      clearInterval(interval);
    };
  }, [isHovered]);

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="h-[200px] lg:h-[500px] relative">
      {images.map((image: any, index) => (
        <img
          key={index}
          src={image}
          alt={index.toString()}
          className={`w-full h-full ${
            currentImageIndex === index ? "block" : "hidden"
          }`}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageMouseLeave}
        />
      ))}
    </div>
  );
};

export default CustomCarousel;
