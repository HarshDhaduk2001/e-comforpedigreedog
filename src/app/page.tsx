/* eslint-disable @next/next/no-img-element */

"use client";
import CustomCarousel from "@/components/home/CustomCarousel";
import React from "react";
import TruckIcon from "../assets/icons/home/TruckIcon";
import SpeedIcon from "../assets/icons/home/SpeedIcon";
import ChatIcon from "../assets/icons/home/ChatIcon";
import DiscountIcon from "../assets/icons/home/DiscountIcon";
import {
  Accessories,
  Bed,
  Bones,
  Clothing,
  Food,
  Supplements,
  Treat,
  Gromming,
  Product,
  Toys,
  Vaccine,
  Vergeterian,
  Winter,
  Img1,
  Img2,
  Dog,
} from "../assets/images/home/exportHome";
import ReviewCarousel from "@/components/home/ReviewCarousel";

const shopping = [
  {
    icon: <TruckIcon />,
    title: "Free Shipping",
    desc: "On all prepaid order above Rs. 599",
  },
  {
    icon: <SpeedIcon />,
    title: "Speedy Deliveries",
    desc: "Parcel dispatched within 24 hours",
  },
  {
    icon: <ChatIcon />,
    title: "Chat With Us",
    desc: "Talk with us everyday, 10am to 8pm",
  },
  {
    icon: <DiscountIcon />,
    title: "Amazing Value",
    desc: "Competitive pricing on the best products",
  },
];

const nutritious = [
  { image: Product.src, title: "Whikas" },
  { image: Product.src, title: "Royal Canin" },
  { image: Product.src, title: "Farmina" },
  { image: Product.src, title: "Pedigree" },
  { image: Product.src, title: "Drools Pet Food" },
];

const categories = [
  { image: Food.src, title: "Dog Food" },
  { image: Treat.src, title: "Dog Treats" },
  { image: Supplements.src, title: "Supplements" },
  { image: Clothing.src, title: "Clothing" },
  { image: Accessories.src, title: "Accessories" },
  { image: Bed.src, title: "Beds" },
  { image: Toys.src, title: "Toys" },
  { image: Gromming.src, title: "Gromming" },
  { image: Vaccine.src, title: "Vaccines" },
  { image: Bones.src, title: "Bones" },
  { image: Winter.src, title: "Winter Clothes" },
  { image: Vergeterian.src, title: "Vegetarian Food" },
];

const woffy = [
  {
    id: 1,
    img: Dog.src,
    title: "Improve your senior dog's life with these 6 tricks!",
    read: "3 minutes read",
    desc: "Whilst the quality of care remains the same for senior dogs, there are additional measures we need to take to ensure they stay relaxed, comfortable, and pain-free! Read along to know more!",
  },
  {
    id: 2,
    img: Dog.src,
    title: "Top 6 reasons your cat is a picky eater!",
    read: "2 minutes read",
    desc: "Got a cat that thinks before it eats? Here are 6 possible reasons why! Whilst most cats eat almost anything, a fair few prefer only certain kinds of foods. ",
  },
  {
    id: 3,
    img: Dog.src,
    title: "Improve your senior dog's life with these 6 tricks!",
    read: "3 minutes read",
    desc: "Whilst the quality of care remains the same for senior dogs, there are additional measures we need to take to ensure they stay relaxed, comfortable, and pain-free! Read along to know more!",
  },
];

const page = () => {
  return (
    <>
      <CustomCarousel />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20 w-[100%] py-5 lg:py-10 bg-[#FEF8F0]">
        {shopping.map((i: any, index: number) => (
          <div
            className="flex flex-col items-center justify-center w-[80%] lg:w-[14%] text-sm lg:text-base"
            key={index}
          >
            {i.icon}
            <span>{i.title}</span>
            <span className="text-center">{i.desc}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center my-7">
        <span className="text-2xl font-bold mb-5">
          Top nutritious pick for your pet!
        </span>
        <div className="items-center justify-center mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {nutritious.map((i: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={i.image}
                alt={`${i.title}${index}`}
                className="h-48 w-40"
              />
              <span className="text-[#FC8321] text-center">{i.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-8 bg-[#FEF0F0]">
        <span className="text-2xl font-bold mb-5">Top Categories Searched</span>
        <div className="items-center justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-12">
          {categories.map((i: any, index: number) => (
            <div
              className="bg-white rounded-lg p-1 flex flex-col items-center justify-center"
              key={index}
            >
              <img
                src={i.image}
                alt={`${i.title}${index}`}
                className="w-32 h-32 rounded-lg"
              />
              <span className="pb-2 border-b-4 border-[#00BDCD]">
                {i.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <img src={Img1.src} alt="image1" className="w-full h-full" />
      <div className="flex flex-col lg:flex-row items-center justify-center my-7 lg:mx-36">
        <img
          src={Img2.src}
          alt="image2"
          className="w-[250px] lg:w-full h-[150px] lg:h-full"
        />
        <div className="ml-8 lg:mr-36">
          <p className="text-3xl font-bold mt-10 lg:mt-0">
            We believe in giving back, today and everyday
          </p>
          <p className="my-8">
            At the core of Woffy, we believe in making a difference in the lives
            of less fortunate animals around us. When you purchase through
            Woffy, part proceeds are used toward supporting various animal
            welfare undertakings around India, either directly through Woffy or
            in collaboration with other NGOs.
          </p>
          <p>
            Our giving back activities involve feeding programs where we help
            support local feeders with food donations, adoption campaigns where
            we help both create awareness around adoption and help connect pet
            parents with pets up for adoption and distribution and collaring of
            street dogs with our reflective collars to help keep them safe and
            visible in low light conditions.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-8 bg-[#FEF0F0]">
        <span className="text-2xl font-bold mb-5">Learn with Woffy</span>
        <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mx-8 lg:mx-36">
          {woffy.map((i: any, index: number) => (
            <div
              className="bg-white rounded-lg p-1 flex flex-col items-center justify-center"
              key={index}
            >
              <img
                src={i.img}
                alt={`${i.title}${index}`}
                className="w-full h-full"
              />
              <div className="flex flex-col items-start justify-center px-4">
                <span className="py-2 text-xl">{i.title}</span>
                <span className="text-base text-[#6E6E6E] items-start">
                  {i.read}
                </span>
                <span className="text-[#656565] py-2 text-sm">{i.desc}</span>
              </div>
              <button
                onClick={() => console.log(i.id)}
                className="text-[#FC8321] border border-[#9A9A9A] rounded-lg py-1 px-3 mt-1 mb-3"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-8">
        <span className="text-2xl font-bold mb-5">Customer Feedback</span>
        <ReviewCarousel />
      </div>
    </>
  );
};

export default page;
