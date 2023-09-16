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
  Avatar,
} from "../../../assets/icons/singleProduct/export";
import ImageGallery from "@/components/product/ImageGallery";
import StarIcon from "@/assets/icons/home/starIcon";
import { StarEmpty } from "@/assets/icons/home/export";
import ProductCard from "@/components/home/ProductCard";

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
  {
    id: 5,
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
    id: 6,
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

  const rating = [65, 22, 7, 2, 4];

  const feature = [
    { name: "Flavor", rating: 4.8 },
    { name: "Value for money", rating: 4.5 },
    { name: "Freshness", rating: 4.3 },
    { name: "Quantity of Food", rating: 3.8 },
    { name: "Quality of Food", rating: 4.5 },
  ];

  const reviews = [
    {
      name: "Akash",
      rating: 5,
      title: "My dog finishes it very fast",
      date: "Reviewed in India on 15 January 2023",
      desc: "My dog really likes it and finishes it in less than a minute. I feed him twice a day and he doesn't get bored of it",
    },
    {
      name: "Harpreet Kaur",
      rating: 4.9,
      title: "Clean bowl every time",
      date: "Reviewed in India on 18 December 2022",
      desc: "My doggo just loves it. She has always been a pedigree lover. This chicken n vegetable flavor has made her even skip the home food. She prefers having pedigree.",
    },
    {
      name: "Vani malhotra",
      rating: 4.2,
      title: "Pathetic and unhygienic",
      date: "Reviewed in India on 5 January 2023",
      desc: "If i could give a negative review I would. Full of insects. I had to get pesticide control done in my house because of that and even after that had weird insects in the house for months.",
    },
    {
      name: "Woffy Customer",
      rating: 4,
      title: "Value and timely",
      date: "",
      desc: "I started purchasing kibble for my pet on Amazon few months back and I feel in control. Earlier I used to get it from pet shops. It used to be unpredictable as sometimes the 15kg bag was not available or the flavour would not be available. Now it is easy.",
    },
  ];

  return (
    <>
      {product && (
        <div className="lg:px-44 py-8 text-[14px]">
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
                  {new Array(
                    product.productRating.toString().split(".")[1] > "5"
                      ? Math.ceil(product.productRating)
                      : Math.floor(product.productRating)
                  )
                    .fill(0)
                    .map((_, starIndex: number) => (
                      <StarIcon key={starIndex} width={18} height={18} />
                    ))}
                  {new Array(
                    product.productRating.toString().split(".")[1] > "5"
                      ? 5 - Math.ceil(product.productRating)
                      : 5 - Math.floor(product.productRating)
                  )
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
          {/* buy to gether */}
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
          {/* more same brand products */}
          <div className="px-[6%] lg:px-0 my-8">
            <p className="text-[24px] mb-4">Explore more in Himalaya</p>
            <ProductCard ProductData={ProductData} Scroll={true} />
          </div>
          {/* more similar products */}
          <div className="px-[6%] lg:px-0 my-8">
            <p className="text-[24px] mb-4">Similar Products</p>
            <ProductCard ProductData={ProductData} Scroll={true} />
          </div>
          {/* customer reviews */}
          <div className="flex flex-col lg:flex-row justify-center w-[100%]">
            <div className="px-[6%] lg:w-[40%] lg:pr-20">
              <div>
                <p className="text-[24px]">Customer reviews</p>
                <p className="flex items-center justify-start mt-2">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarEmpty />
                  <span className="ml-5">4.1 out of 5</span>
                </p>
                <p className="text-[#9A9A9A] mb-2">20,948 global ratings</p>
                <div>
                  {rating.map((i: any, index: number) => (
                    <>
                      <div className="text-blue flex items-center justify-start">
                        {5 - index}star
                        <div
                          className="bg-orange py-2 rounded-l-sm ml-4"
                          style={{ width: `${i}%` }}
                        ></div>
                        <div
                          className={`bg-[#E1E1E1] py-2 rounded-r-sm ${
                            i.toString().length > 1 ? "mr-4" : "mr-6"
                          }`}
                          style={{ width: `${100 - i}%` }}
                        ></div>
                        {i}%
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <hr className="bg-[#9A9A9A] h-[1px] my-8" />
              <div>
                <p className="text-[24px]">By Feature</p>
                {feature.map((i: any, index: number) => (
                  <div
                    className="flex items-center justify-between mt-3 text-[16px]"
                    key={index}
                  >
                    <p>{i.name}</p>
                    <div className="text-blue flex items-center justify-start text-[14px]">
                      {new Array(
                        i.rating.toString().split(".")[1] > 5
                          ? Math.ceil(i.rating)
                          : Math.floor(i.rating)
                      )
                        .fill(0)
                        .map((_, starIndex: number) => (
                          <StarIcon key={starIndex} />
                        ))}
                      {new Array(
                        i.rating.toString().split(".")[1] > 5
                          ? 5 - Math.ceil(i.rating)
                          : 5 - Math.floor(i.rating)
                      )
                        .fill(0)
                        .map((_, starIndex: number) => (
                          <StarEmpty key={starIndex} />
                        ))}
                      <span className="ml-2">{i.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="bg-[#9A9A9A] h-[1px] my-8" />
              <div>
                <p className="text-[24px]">By Feature</p>
                <div className="flex flex-col items-center justify-center gap-3 mt-2">
                  <p className="text-[16px]">
                    Share your thoughts with other customers
                  </p>
                  <button className="py-1 px-2 lg:px-4 border border-orange text-orange rounded-sm cursor-pointer">
                    Write a product review
                  </button>
                </div>
              </div>
            </div>
            <hr className="bg-[#9A9A9A] h-[1px] my-8 lg:hidden" />
            <div className="px-[6%] lg:w-[60%]">
              <div>
                <p className="text-[24px] mb-2">Top reviews from India</p>
                {reviews.map((i: any, index: number) => (
                  <>
                    <div className="my-5 text-[12px] flex flex-col items-start justify-normal gap-2 lg:pr-20">
                      <p className="flex items-center justify-start gap-2">
                        <Avatar />
                        {i.name}
                      </p>
                      <div className="flex items-center justify-start gap-6">
                        <p className="flex items-center justify-center">
                          {new Array(
                            i.rating.toString().split(".")[1] > 5
                              ? Math.ceil(i.rating)
                              : Math.floor(i.rating)
                          )
                            .fill(0)
                            .map((_, starIndex: number) => (
                              <StarIcon key={starIndex} />
                            ))}
                          {new Array(
                            i.rating.toString().split(".")[1] > 5
                              ? 5 - Math.ceil(i.rating)
                              : 5 - Math.floor(i.rating)
                          )
                            .fill(0)
                            .map((_, starIndex: number) => (
                              <StarEmpty key={starIndex} />
                            ))}
                        </p>
                        {i.title}
                      </div>
                      <p className="text-[#656565] -mt-2">{i.date}</p>
                      <p>{i.desc}</p>
                      <div className="gap-5 flex items-center justify-start">
                        <button className="py-1 px-4 border border-orange text-orange rounded-sm cursor-pointer">
                          Helpfull
                        </button>
                        &nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2"
                          height="20"
                          viewBox="0 0 2 20"
                          fill="none"
                        >
                          <path d="M1 0V20" stroke="black" stroke-width="0.5" />
                        </svg>
                        <span className="cursor-pointer">Report abuse</span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          {/* Personalize recomandation when user is not logged in that time show this */}
          <hr className="bg-[#9A9A9A] h-[1px] my-8" />
          <div className="flex flex-col items-center justify-center gap-1 lg:gap-3">
            <p className="text-[16px] lg:text-[20px]">
              See Personalised recommandation
            </p>
            <button className="py-2 px-20 flex items-center justify-center bg-orange text-white rounded-full gap-2">
              Sign In
            </button>
            <p className="lg:text-[16px]">
              New customer? <span className="text-blue">Start here.</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
