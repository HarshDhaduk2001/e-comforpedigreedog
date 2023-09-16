/* eslint-disable @next/next/no-img-element */
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
import {
  Buy,
  Cart,
  Gpay,
  Location,
  MasterCard,
  Plus,
  Minus,
  Rupay,
  Upi,
  Visa,
} from "../../../assets/icons/singleProduct/export";
import ImageGallery from "@/components/product/ImageGallery";
import StarIcon from "@/assets/icons/home/starIcon";
import { StarEmpty } from "@/assets/icons/home/export";
import ProductCarousel from "@/components/product/ProductCarousel";

const ProductData = [
  {
    id: 1,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: 10,
    productCount: 5,
    img: Product1,
    productPrice: 179,
    productRating: 4.8,
    productReviewCount: 20,
  },
  {
    id: 2,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: 40,
    productCount: 20,
    img: Product2,
    productPrice: 499,
    productRating: 4.5,
    productReviewCount: 20,
  },
  {
    id: 3,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: 10,
    productCount: 30,
    img: Product3,
    productPrice: 200,
    productRating: 3.1,
    productReviewCount: 20,
  },
  {
    id: 4,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: 15,
    productCount: 40,
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
  const [currentNumber, setCurrentNumber] = useState(1);

  const handleImageClick = (kg: string) => {
    setSelectedValue(kg);
  };

  const product = ProductData.find((item: any) => item.id === parseInt(id));

  const items: any[] = [Product1, Product2, Product3, Product4];
  return (
    <>
      {product && (
        <div className="lg:px-44 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-center text-[14px] select-none">
            <div className="w-[90%] lg:hidden">
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
            </div>
            <div>
              <ImageGallery
                images={[
                  Product1,
                  Product2,
                  Product3,
                  Product4,
                  Product1,
                  Product2,
                ]}
              />
              <hr className="bg-[#9A9A9A] h-[1px] my-4 hidden lg:block" />
              <div className="flex-col items-start justify-start gap-1 text-[16px] font-semibold hidden lg:block">
                <span>Pay Securely with</span>
                <div className="flex items-center justify-center gap-4">
                  <Gpay />
                  <Visa />
                  <Upi />
                  <MasterCard />
                  <Rupay />
                </div>
              </div>
            </div>
            <div className="w-[90%] lg:w-[60%] lg:px-20 mt-8 lg:mt-0">
              <div className="hidden lg:block">
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
              </div>
              <p className="text-[28px] font-semibold">
                {Math.ceil(
                  product.productPrice -
                    (product.productPrice * product.savePercentage) / 100
                )}
                <span className="text-[14px] font-normal">
                  (inclusive of all taxes)
                </span>
              </p>
              <p className="line-through text-[#9A9A9A]">
                M.R.P.: ₹ {product.productPrice}
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
              <div className="flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-12">
                <span>Delivery</span>
                <div className="relative">
                  <span className="absolute left-3 top-[6px]">
                    <Location />
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
                  <span className="text-[#00BDCD]">&nbsp;Free</span> ₹40
                </p>
                <p className="text-[9px]">if ordered before 2:28 PM</p>
              </div>
              <hr className="bg-[#9A9A9A] h-[0.8px] my-4" />
              <div className="gap-4 flex flex-col items-start justify-start">
                <p>Quantity</p>
                <span className="flex items-center justify-center border border-[#9A9A9A] rounded-full py-1 px-8 text-[24px] gap-8 w-[100%] lg:w-auto">
                  <span
                    onClick={() =>
                      currentNumber > 1 && setCurrentNumber(currentNumber - 1)
                    }
                  >
                    <Minus />
                  </span>
                  <span>{currentNumber}</span>
                  <span
                    onClick={() =>
                      currentNumber < product.productCount &&
                      setCurrentNumber(currentNumber + 1)
                    }
                  >
                    <Plus />
                  </span>
                </span>
                <button className="py-2 flex items-center justify-center w-[100%] border border-orange text-orange rounded-full bg-orange/10 gap-2">
                  <Cart />
                  Add to Cart
                </button>
                <button className="py-2 flex items-center justify-center w-[100%] bg-orange text-white rounded-full gap-2">
                  <Buy />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <hr className="bg-[#9A9A9A] h-[1px] my-8" />
          <div className="px-[6%] lg:px-0">
            <p className="text-[24px]">Frequently bought together</p>
            <div className="flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-10 my-4 lg:my-6">
              <div className="flex items-center justify-center">
                <img
                  src={Product3.src}
                  alt="product3"
                  className="w-[95px] h-[100px] lg:w-auto lg:h-auto"
                />
                <Plus />
                <img
                  src={Product3.src}
                  alt="product2"
                  className="w-[95px] h-[100px] lg:w-auto lg:h-auto"
                />
                <Plus />
                <img
                  src={Product3.src}
                  alt="product3"
                  className="w-[95px] h-[100px] lg:w-auto lg:h-auto"
                />
              </div>
              <div className="flex flex-col items-center justify-center lg:justify-start">
                <p>Total Price: ₹ 1,999 </p>
                <p className="line-through text-[12px] my-2">M.R.P.: ₹ 2,499</p>
                <button className="p-2 w-[100%] bg-orange text-white rounded-full text-[12px]">
                  Add all three in cart
                </button>
              </div>
            </div>
            <div className="text-[12px] text-gray hidden lg:block">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="check"
                  checked
                  className="bg-orange text-white"
                />
                <p>
                  This item: Pedigree Dry Food for Adult Dogs, Chicken &
                  Vegetables Flavor, 3kg Pack
                  <span className="text-orange">
                    &nbsp;₹725.00 (₹24.17/100 g)
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="check"
                  checked
                  className="bg-orange text-white"
                />
                <p>
                  Pedigree Wet Food for Adult Dogs, Chicken & Liver Chunks in
                  Gravy Flavour, Pack of 15 (15 x 70g)
                  <span className="text-orange">
                    &nbsp;₹558.00 (₹53.14/100 g)
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="check"
                  checked
                  className="bg-orange text-white"
                />
                <p>
                  Meat Up Chicken Flavour Real Chicken Dog Biscuit For All Life
                  Stages, 1kg (Buy 1 Get 1 Free)
                  <span className="text-orange">
                    &nbsp;₹339.00 (₹16.95/100 g)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-[6%] lg:px-0 my-8">
            <p className="text-[24px]">Explore more in Himalaya</p>
            <ProductCarousel items={items} />
          </div>
        </div>
      )}
    </>
  );
};

export default page;
