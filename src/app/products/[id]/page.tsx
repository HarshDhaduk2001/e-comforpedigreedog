/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  Product1,
  Product2,
  Product3,
  Product4,
} from "@/assets/images/home/exportHome";
import ImageGallery from "@/components/product/ImageGallery";
import StarIcon from "@/assets/icons/home/starIcon";
import { StarEmpty } from "@/assets/icons/home/export";

const ProductData = [
  {
    id: 1,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: "10",
    productCount: "52",
    img: Product1,
    productPrice: 179,
    productRating: 4.8,
    productReviewCount: 20,
  },
  {
    id: 2,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: "40",
    productCount: "20",
    img: Product2,
    productPrice: 499,
    productRating: 4.5,
    productReviewCount: 20,
  },
  {
    id: 3,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: "10",
    productCount: "30",
    img: Product3,
    productPrice: 200,
    productRating: 3.1,
    productReviewCount: 20,
  },
  {
    id: 4,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: "15",
    productCount: "40",
    img: Product4,
    productPrice: 200,
    productRating: 3.1,
    productReviewCount: 20,
  },
];

const kg = ["250g", "1kg", "2kg", "5kg"];

const page = () => {
  const id = usePathname().split("/")[2];
  const [selectedValue, setSelectedValue] = useState<any | null>("250g");

  const handleImageClick = (kg: string) => {
    setSelectedValue(kg);
  };

  const product = ProductData.find((item: any) => item.id === parseInt(id));

  return (
    <>
      {product ? (
        <div className="px-44 flex items-center justify-center text-[14px] py-8">
          <ImageGallery images={[Product1, Product2, Product3, Product4]} />
          <div className="w-[60%] px-20">
            <p className="text-[24px]">
              PetSutra Himalaya Adult Dry Dog Food Meat and Rice 10kg
            </p>
            <p>
              by <span className="text-[#00BDCD]">Himalaya Dog Food</span>
            </p>
            <div className="flex items-center justify-start mt-1">
              {new Array(Math.floor(product.productRating))
                .fill(0)
                .map((_, starIndex: number) => (
                  <StarIcon key={starIndex} width={18} height={18} />
                ))}
              {new Array(5 - Math.floor(product.productRating))
                .fill(0)
                .map((_, starIndex: number) => (
                  <StarEmpty key={starIndex} width={18} height={18} />
                ))}
              <span className="text-[#00BDCD] ml-5 text-[12px]">
                7,710 ratings
              </span>
            </div>
            <p className="text-[28px] font-semibold">
              ₹ 1,399{" "}
              <span className="text-[14px] font-normal">
                (inclusive of all taxes)
              </span>
            </p>
            <p className="line-through text-[#9A9A9A]">M.R.P.: ₹ 1,449</p>
            <p>
              Or 3 interest-free payments of ₹ 467 with
              <span className="text-[#00BDCD]">easy-Pay</span>
            </p>
            <hr className="bg-[#9A9A9A] h-[0.8px] my-4" />
            <p>Size: {selectedValue}</p>
            <div className="flex items-center justify-start text-[#9A9A9A] gap-4 mt-2">
              {kg.map((kg: string, index: number) => (
                <button
                  onClick={() => handleImageClick(kg)}
                  key={index}
                  className={`border ${
                    selectedValue === kg
                      ? "border-[#DF6400] bg-orange/10 text-[#DF6400] shadow-lg"
                      : "border-[#9A9A9A]"
                  } py-1 px-2 rounded-md`}
                >
                  {kg}
                </button>
              ))}
            </div>
            <hr className="bg-[#9A9A9A] h-[0.8px] my-4" />
            <div className="flex items-center justify-start gap-12">
              <span>Delivery</span>
              <div className="relative">
                <span className="absolute left-3 top-[6px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 9C9.4125 9 9.76575 8.853 10.0598 8.559C10.3533 8.2655 10.5 7.9125 10.5 7.5C10.5 7.0875 10.3533 6.73425 10.0598 6.44025C9.76575 6.14675 9.4125 6 9 6C8.5875 6 8.2345 6.14675 7.941 6.44025C7.647 6.73425 7.5 7.0875 7.5 7.5C7.5 7.9125 7.647 8.2655 7.941 8.559C8.2345 8.853 8.5875 9 9 9ZM9 16.2188C8.9 16.2188 8.8 16.2 8.7 16.1625C8.6 16.125 8.5125 16.075 8.4375 16.0125C6.6125 14.4 5.25 12.9032 4.35 11.5223C3.45 10.1407 3 8.85 3 7.65C3 5.775 3.60325 4.28125 4.80975 3.16875C6.01575 2.05625 7.4125 1.5 9 1.5C10.5875 1.5 11.9843 2.05625 13.1903 3.16875C14.3967 4.28125 15 5.775 15 7.65C15 8.85 14.55 10.1407 13.65 11.5223C12.75 12.9032 11.3875 14.4 9.5625 16.0125C9.4875 16.075 9.4 16.125 9.3 16.1625C9.2 16.2 9.1 16.2188 9 16.2188Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <input
                  type="number"
                  name="pincode"
                  className="border border-[#9A9A9A] text-[#9A9A9A]/80 placeholder:text-[#9A9A9A] py-1 px-10 rounded-md w-[300px]"
                  placeholder="Enter delivery pincode"
                />
                <span className="absolute right-3 top-[5px] font-semibold">
                  Check
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <p>
                Delivery by 1 Feb, Wednesday |
                <span className="text-[#00BDCD]">Free</span> ₹40
              </p>
              <p className="text-[9px]">if ordered before 2:28 PM</p>
            </div>
            <hr className="bg-[#9A9A9A] h-[0.8px] my-4" />
            <div className="gap-4 flex flex-col items-start justify-start">
              <p>Quantity</p>
              <span className="flex items-center justify-center border border-[#9A9A9A] rounded-full py-1 px-8 text-[24px] gap-8">
                <svg
                  width="10"
                  height="3"
                  viewBox="0 0 10 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M9.968 0.279999V2.128H0.392V0.279999H9.968Z"
                    fill="black"
                  />
                </svg>
                <span>1</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M12.328 7.152H7.216V12.336H5.176V7.152H0.0880001V5.304H5.176V0.0959988H7.216V5.304H12.328V7.152Z"
                    fill="black"
                  />
                </svg>
              </span>
              <button className="py-2 flex items-center justify-center w-[100%] border border-orange text-orange rounded-full bg-orange/10 gap-2">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.875 5.625V3.75H5V2.5H6.875V0.625H8.125V2.5H10V3.75H8.125V5.625H6.875ZM4.375 13.75C4.03125 13.75 3.73708 13.6277 3.4925 13.3831C3.2475 13.1381 3.125 12.8438 3.125 12.5C3.125 12.1562 3.2475 11.8619 3.4925 11.6169C3.73708 11.3723 4.03125 11.25 4.375 11.25C4.71875 11.25 5.01292 11.3723 5.2575 11.6169C5.5025 11.8619 5.625 12.1562 5.625 12.5C5.625 12.8438 5.5025 13.1381 5.2575 13.3831C5.01292 13.6277 4.71875 13.75 4.375 13.75ZM10.625 13.75C10.2812 13.75 9.98708 13.6277 9.7425 13.3831C9.4975 13.1381 9.375 12.8438 9.375 12.5C9.375 12.1562 9.4975 11.8619 9.7425 11.6169C9.98708 11.3723 10.2812 11.25 10.625 11.25C10.9688 11.25 11.2631 11.3723 11.5081 11.6169C11.7527 11.8619 11.875 12.1562 11.875 12.5C11.875 12.8438 11.7527 13.1381 11.5081 13.3831C11.2631 13.6277 10.9688 13.75 10.625 13.75ZM11.875 10.625H2.26562L4.125 7.25L1.875 2.5H0.625V1.25H2.67188L5.32812 6.875H9.71875L12.1406 2.5H13.5625L10.4531 8.125H5.0625L4.375 9.375H11.875V10.625Z"
                    fill="#FC8321"
                  />
                </svg>
                Add to Cart
              </button>
              <button className="py-2 flex items-center justify-center w-[100%] bg-orange text-white rounded-full gap-2">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.875 4.6875H13.125L12.5 13.125H2.5L1.875 4.6875Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 5.9375V1.875H10V5.9375"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 10.625H10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
};

export default page;
