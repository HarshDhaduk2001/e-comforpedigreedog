/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import StarIcon from "@/assets/icons/home/starIcon";
import { StarEmpty } from "@/assets/icons/home/export";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ ProductData, Scroll = false }: any) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const Products = () =>
    ProductData.map((i: any, index: number) => (
      <div
        className="flex justify-center items-center cursor-pointer"
        key={index}
      >
        <div className="bg-white rounded-lg text-[#9A9A9A] flex flex-col items-center justify-center border border-[#E1E1E1] w-[160px] md:w-[205px] relative text-[12px] md:text-[14px]">
          <Link href={`/products/${i.id}`}>
            <div className="flex items-center justify-center">
              <img
                src={i.img.src}
                alt="img"
                className="w-[108px] h-[159px] p-1"
              />
            </div>
            <span className="bg-blue text-white text-[9px] py-1 px-2 rounded-tl-lg absolute top-0 left-0">
              Save Extra {i.savePercentage}%
            </span>
            <span className="text-[10px] absolute right-2 top-36">
              +{i.productCount} more
            </span>
            <div className="px-4 py-3 w-full border-t border-[#E1E1E1] flex flex-col items-start">
              <span className="text-[10px] line-through">
                From ₹ {i.productPrice}
              </span>
              <span className="text-[#FC8321] px-2">
                From ₹
                {Math.ceil(
                  i.productPrice - (i.productPrice * i.savePercentage) / 100
                )}
              </span>
              <span className="text-sm text-[#6E6E6E]">{i.productName}</span>
              <span className="text-sm text-[#9A9A9A]">{i.BrandName}</span>
              <span className="flex items-center justify-center mt-1">
                {new Array(
                  i.productRating.toString().split(".")[1] > 5
                    ? Math.ceil(i.productRating)
                    : Math.floor(i.productRating)
                )
                  .fill(0)
                  .map((_, starIndex: number) => (
                    <StarIcon key={starIndex} />
                  ))}
                {new Array(
                  i.productRating.toString().split(".")[1] > 5
                    ? 5 - Math.ceil(i.productRating)
                    : 5 - Math.floor(i.productRating)
                )
                  .fill(0)
                  .map((_, starIndex: number) => (
                    <StarEmpty key={starIndex} />
                  ))}
                <span className="text-[8px] text-[#9A9A9A] -mt-5 ml-8">
                  {i.productRating} | {i.productReviewCount} Reviews
                </span>
              </span>
            </div>
          </Link>
          <button
            className="text-[8px] md:text-[10px] text-white bg-orange rounded-lg px-[3px] md:p-2 w-[80%] mb-2 mt-0 py-2"
            onClick={() => console.log(i.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ));

  return (
    <>
      {Scroll ? (
        <div className="w-full">
          <Slider {...settings}>{Products()}</Slider>
        </div>
      ) : (
        Products()
      )}
    </>
  );
};

export default ProductCard;
