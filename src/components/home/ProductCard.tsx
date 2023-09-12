/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Product1, Product2, Product3, Product4 } from "@/assets/images/home/exportHome";
import StarIcon from "@/assets/icons/home/starIcon";
import { StarEmpty } from "@/assets/icons/home/export";

const ProductCard = () => {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <div className="bg-white rounded-lg text-[#9A9A9A] flex flex-col items-center justify-center border border-[#E1E1E1] w-[160px] md:w-[205px] relative text-[12px] md:text-[14px]">
        <img src={Product4.src} alt="img" className="w-[108px] h-[159px] p-1" />
        <span className="bg-blue text-white text-[9px] py-1 px-2 rounded-tl-lg absolute top-0 left-0">
          Save Extra 10%
        </span>
        <span className="bg-blue text-white text-[9px] py-1 px-4 absolute top-[130px] left-0">
          Save 8%
        </span>
        <span className="text-[10px] absolute right-2 top-36">+20 more</span>
        <div className="px-4 py-3 w-full border-t border-[#E1E1E1] flex flex-col items-start">
          <span className="text-[10px] line-through">From ₹ 200</span>
          <span className="text-[#FC8321] px-2">From ₹ 179</span>
          <span className="text-sm text-[#6E6E6E]">
            Wiskas Dry Food for all
            <br />
            Breeds - Orignal
          </span>
          <span className="text-sm text-[#9A9A9A]">Whiskas</span>
          <span className="flex items-center justify-center mt-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarEmpty />
            <span className="text-[8px] text-[#9A9A9A] -mt-5 ml-8">
              (4.1) | 20 Reviews
            </span>
          </span>
            <button className="text-[8px] md:text-[10px] text-white bg-orange rounded-lg py-1 px-[3px] md:p-2 -mt-3 w-[100%]">
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
