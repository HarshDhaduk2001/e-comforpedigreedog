/* eslint-disable @next/next/no-img-element */
"use client";
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
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="relative text-right">
        <img
          src={Hero.src}
          alt="dog"
          className="w-full h-[300px] lg:h-[700px]"
        />
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
        <span className="text-3xl lg:text-4xl font-bold mb-2 lg:mb-0">
          Our Value
        </span>
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
        <span className="text-3xl lg:text-4xl font-bold">Mission</span>
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
      <div className="relative hidden lg:block">
        <span className="absolute -bottom-20 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="535"
            height="489"
            viewBox="0 0 535 489"
            fill="none"
          >
            <path
              opacity="0.15"
              d="M61 169C33 81 -14.6667 10.5 -50.5 0.5L-59 489H512C512.667 479.833 570.5 444 498.5 395C426.5 346 377.5 314 258 308C138.5 302 89 257 61 169Z"
              fill="#FC8321"
            />
          </svg>
        </span>
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
      <div className="relative hidden lg:block">
        <span className="absolute -top-28 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="707"
            height="445"
            viewBox="0 0 707 445"
            fill="none"
          >
            <path
              opacity="0.15"
              d="M85 394.62C33 461.42 -98.6667 447.12 -158 431.62L-150 25.6199C144.167 6.28656 727.1 -20.7801 705.5 25.6199C678.5 83.6199 541 126.62 323.5 161.12C106 195.62 150 311.12 85 394.62Z"
              fill="#FC8321"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center mt-7 lg:mt-24">
        <span className="text-3xl lg:text-4xl font-bold">
          Message from Founders
        </span>
        <div className=" items-center justify-center gap-5 lg:gap-20 w-[100%] py-5 lg:py-10 lg:px-52">
          <div className="flex flex-col lg:flex-row items-center justify-center w-[100%]">
            <span className="w-[80%] lg:w-[50%] lg:pr-8">
              <p>
                Woffy has its humble beginnings from a very personal story; as
                dog lovers and pet parents of the world&apos;s best dog (yes,
                every pet parent says this). Rex came into our lives and changed
                it forever. For us, Rex is a companion that always loves, a
                friend that never judges and a child that is always ready to
                have some fun. He is truly the heart and soul of our family.
              </p>
              <p className="lg:mt-8">
                As pet parents, we totally understand the feeling of celebrating
                life with your pet. Somethings just can’t be explained; be it
                the excitement of shopping for your pet, the comfort of a cuddle
                or the workday guilt. We know the pet-parenting journey is full
                of up’s and down’s, but what if you had someone to hold your
                hand and support your through this journey? Rex ignited a
                passion so strong that we saw ourselves travelling from
                Ahmedabad to Pune to share our love for pets with India. Also we
                have our own plant at Pune area with products making in
                machineries and will be all the Made In India product.
              </p>
            </span>
            <span className="w-[50%] mt-8 lg:mt-0">
              <img
                src={Family.src}
                alt="family"
                className="lg:w-[500px] lg:h-[400px]"
              />
            </span>
          </div>
          <p className="mx-10 flex items-center justify-center my-5">
            For every products and process of Woffy Pet Shop, we always consider
            and focus on customers&apos; safety and satisfaction. Additionally,
            we also focus on environmental safety along with the highest quality
            standard. We operate our business with care of transparency and good
            governance so that there ​will be a consistency in social
            development in all sectors and in the country.
          </p>
          <p className="mx-10 flex items-center justify-center">
            Above all, we intend to develop our products to be recognized by
            international standards as well as upholding the responsibility to
            return good deeds to our country and people. We help to develop and
            strengthen the value of the quality of life for employees, partners
            and local communities. This is for the better living, well-being,
            and sustainability.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-7 lg:mt-24 bg-[#FEF0F0]">
        <span className="text-3xl lg:text-4xl font-bold mt-8">
          Local Matters
        </span>
        <div className="flex items-center justify-center gap-5 lg:gap-20 w-[100%] py-5 lg:py-10 lg:px-52">
          <span className="w-[80%] lg:w-[70%] lg:pr-8">
            <p>
              We believe in supporting our local community. For us, it is about
              nurturing local businesses so that we can grow together, and in
              turn provide the best products and services to enrich the lives of
              pets.
            </p>
            <p className="my-2">
              That is why at Woffy, a large proportion of our products are
              sourced from independent curators based in India. We made products
              in India and have all the manufacturing units in the India base
              only. Also we have all the products certified and licenses from
              the respected agencies and other government bodies.
            </p>
            <p>
              Our food product is all certified from FSSAI, our products like
              harness and pet belt are also certified from the ISI unit of
              government safety bodies. We use original brand to make our
              products and the procedure of the products are mandatory to be
              very proper and made with all safety and security. Our Packing
              products are being done in India and are totally done by the
              machinery based packings. We are proud of our country and would
              like to be the part of Made in India forum.
            </p>
          </span>
          <span className="w-[30%] hidden lg:block">
            <img
              src={Indian.src}
              alt="indian"
              className="w-[500px] h-[400px]"
            />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-7 gap-3 lg:gap-8">
        <span className="text-[14px] lg:text-[24px] mt-5 flex items-center justify-center text-center mx-8">
          Once ordered, your products will be home-delivered as per the order
          details.
        </span>
        <span className="text-[14px] lg:text-[24px] flex items-center justify-center mx-8">
          We also offer our services globally.
        </span>
        <span className="text-[14px] lg:text-[24px] mb-5 flex items-center justify-center mx-8">
          Write us for feedback or suggestion
        </span>
        <form
          className="flex flex-col items-center justify-center gap-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="border border-gray rounded-lg py-2 px-4 w-[120%] lg:w-[50%]"
            />
            <input
              type="tel"
              name="tel"
              placeholder="Enter Phone No."
              className="border border-gray rounded-lg py-2 px-4 w-[120%] lg:w-[50%]"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="border border-gray rounded-lg py-2 px-4 w-[100%]"
          />
          <textarea
            name="comment"
            cols={30}
            rows={4}
            placeholder="Enter Comment"
            className="border border-gray rounded-lg py-2 px-4 w-[100%]"
          ></textarea>
          <button
            type="submit"
            className="bg-orange text-white py-2 px-4 rounded-lg w-[100%]"
          >
            Send
          </button>
        </form>
      </div>
      <div className="relative hidden lg:block">
        <span className="absolute -bottom-8 right-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="683"
            height="445"
            viewBox="0 0 683 445"
            fill="none"
          >
            <path
              opacity="0.15"
              d="M621.084 49.9787C673.084 -16.8213 804.751 -2.52127 864.084 12.9787L856.084 418.979C561.917 438.312 -21.016 465.379 0.583984 418.979C27.584 360.979 165.084 317.979 382.584 283.479C600.084 248.979 556.084 133.479 621.084 49.9787Z"
              fill="#FC8321"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default page;
