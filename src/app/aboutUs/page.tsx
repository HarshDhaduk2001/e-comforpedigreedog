/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  AddCart,
  Earth,
  Earth1,
  Game,
  Hand,
  Idea,
  Setting,
  Wind,
} from "../../assets/icons/about/export";
import {
  Coconut,
  Dog,
  Family,
  Food,
  Hero,
  Indian,
  Pumplkin,
  Seek,
} from "../../assets/images/about/export";

const mission = [
  {
    icon: <AddCart />,
    title: "1.",
    desc: "We commit to deliver the best quality products and services to our consumers and customers.",
  },
  {
    icon: <Wind />,
    title: "2.",
    desc: "As our core value, we act responsibly to our environment and societies including taking every step for sustainability.",
  },
  {
    icon: <Game />,
    title: "3.",
    desc: "We develop knowledge and ability to bring innovation to ensure the well being of your pet's health.",
  },
];

const page = () => {
  return (
    <>
      <div className="relative text-right">
        <img src={Hero.src} alt="dog" className="w-full h-[300px] lg:h-[700px]" />
        <span className="absolute top-24 right-5">
          <p className="text-white font-bold text-[28px] lg:hidden">
            Thai Awesome Crafted by Heart, Loved by your pets
          </p>
          <p className="text-white font-semibold text-[18px] mt-2 lg:hidden">
            Providing higest quality and natural source ingredients food to
            ensure your pet&apos;s lifelong health and well-being
          </p>
          <p className="text-white font-bold text-[48px] hidden lg:block">
            Thai Awesome Crafted
            <br /> by Heart, Loved by
            <br /> your pets
          </p>
          <p className="text-white font-semibold text-[18px] mt-10 hidden lg:block">
            Providing higest quality and natural source ingredients food to
            ensure
            <br />
            your pet&apos;s lifelong health and well-being
          </p>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center my-7">
        <span className="text-4xl font-bold mb-2 lg:mb-0">Our Value</span>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20 w-[100%] py-5 lg:py-10">
          <div className="flex flex-col items-center w-[80%] lg:w-[20%] text-sm lg:text-base gap-4">
            <span className="relative">
              <span className="absolute -top-5 -right-1 z-10">
                <Setting Height={45} Width={45} />
              </span>
              <Idea />
              <span className="absolute bottom-3 left-1">
                <Setting Height={20} Width={20} />
              </span>
            </span>
            <span className="text-[28px] font-medium">Innovative</span>
            <span className="text-center text-[16px]">
              We focus on creating new products and formula for quality
              improvement and consumer experience.
            </span>
          </div>
          <div className="flex flex-col items-center w-[80%] lg:w-[20%] text-sm lg:text-base gap-4">
            <Hand />
            <span className="text-[28px] font-medium">Sustainable</span>
            <span className="text-center text-[16px]">
              Our strategy is rooted in our commitment to fostering social,
              environmental, and economic impacts for a sustainable future.
            </span>
          </div>
          <div className="flex flex-col items-center w-[80%] lg:w-[20%] text-sm lg:text-base gap-4 mt-8 lg:mt-0">
            <Earth1 />
            <span className="text-[28px] font-medium">Trustworthy</span>
            <span className="text-center text-[16px]">
              We commit to deliver products that meet global standard and the
              best service to customers .
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 my-4 lg:my-10 bg-orange w-[100%]">
        <div className="relative w-[50%] hidden lg:block">
          <img
            src={Seek.src}
            alt="dog"
            className="w-[500px] h-[380px] absolute left-0 -bottom-44"
          />
          <img
            src={Pumplkin.src}
            alt="pumplkin"
            className="w-[100px] h-[100px] absolute left-64 top-16"
          />
          <img
            src={Food.src}
            alt="food"
            className="w-[300px] h-[200px] absolute right-40 top-0 z-10"
          />
          <img
            src={Coconut.src}
            alt="coconut"
            className="w-[150px] h-[100px] absolute right-24 top-16"
          />
        </div>
        <div className="text-white gap-4 flex flex-col justify-center lg:text-left px-10 lg:px-0 lg:w-[50%]">
          <span className="text-[32px]">Vision</span>
          <span className="hidden lg:block">
            Our vision is to be recognized by international standards as world
            <br />
            class
            <br /> premium innovation pet food producer and exporter with
            <br />
            responsibility
            <br /> to society, communities and environment.
          </span>
          <span className="lg:hidden">
            Our vision is to be recognized by international standards as world 
            class premium innovation pet food producer and exporter with 
            responsibility to society, communities and environment.
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-7 lg:mt-24 lg:mb-32">
        <span className="text-4xl font-bold">Mission</span>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20 w-[100%] py-5 lg:py-10">
          {mission.map((i: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center w-[80%] lg:w-[25%] text-sm lg:text-base gap-4 shadow-md py-4 px-12"
            >
              {i.icon}
              <div className="flex flex-col items-start justify-center gap-3">
                <span className="text-[24px] text-orange font-semibold">
                  {i.title}
                </span>
                <span className="text-start text-[16px]">{i.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center py-12 my-2 lg:my-10 bg-blue lg:w-[100%]">
        <div className="text-white gap-2 flex flex-col justify-center lg:text-left lg:w-[50%] px-8 lg:pl-16">
          <span className="text-[32px]">About Our Business</span>
          <span>
            Woffy Private Limited is fully Indian-owned private company with its
            registered capital of 1 billion. Since we have started business, we
            continuously grow each year. Our factory is located in Pune district
            of Maharashtra, India, in the area of 156,800 square meters with
            more than 600 employees. Our automatic machinery has manufacturing
            capacity of 25,000 tones per year. Our brand is sold to both
            domestic and international markets by the most of products are
            exported to Middle East, Africa and Asia. The export value is over
            60% of our total revenue.
          </span>
        </div>
        <div className="relative w-[30%] hidden lg:block">
          <img
            src={Dog.src}
            alt="dog"
            className="w-[500px] h-[500px] absolute left-0 -bottom-60 "
          />
        </div>
      </div>
    </>
  );
};

export default page;
