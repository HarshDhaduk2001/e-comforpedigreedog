/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Map from "../../assets/images/common/map.png";

const data = [
  {
    title: "Marketing Department",
    desc1: "marketing@woffypetshop.com",
    desc2: "+21 (0) 2821 5545/46/47/48",
  },
  {
    title: "Brand Sales Department",
    desc1: "sales@woffypetshop.com",
    desc2: "+21 (0) 2821 6632/33/34/35",
  },
  {
    title: "Management Department",
    desc1: "management@woffypetshop.com",
    desc2: "+21 (0) 2821 1893/94/95/96",
  },
];

const page = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center my-7 gap-3 lg:gap-8 px-12 lg:px-28">
        <span className="text-[20px] lg:text-[48px] font-bold mt-5 flex items-center justify-center">
          Contact Us
        </span>
        <span className="text-[14px] lg:text-[24px] flex items-center justify-center text-center">
          Contact us for any further help, feedback or any kind of suggestion
          for the organization. Also for any collaboration for sponsorship
          concern kindly mail us with detail information at
          contact@woffypetshop.com
        </span>
        <form
          className="flex flex-col items-center justify-center gap-8 w-full mt-8 lg:mt-0"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="border border-gray rounded-lg py-2 px-4 w-[90%]"
          />
          <input
            type="tel"
            name="tel"
            placeholder="Enter Phone No."
            className="border border-gray rounded-lg py-2 px-4 w-[90%]"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="border border-gray rounded-lg py-2 px-4 w-[90%]"
          />
          <textarea
            name="comment"
            cols={30}
            rows={4}
            placeholder="Enter Comment"
            className="border border-gray rounded-lg py-2 px-4 w-[90%]"
          ></textarea>
          <div className="flex items-center justify-center gap-2 px-4 lg:px-0">
            <input type="checkbox" name="check" className="w-4 h-4" />
            <label
              htmlFor="Save my name, email, and website in this browser for the next time I comment."
              className="text-[10px] lg:text-[16px]"
            >
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button
            type="submit"
            className="bg-orange text-white py-2 px-4 rounded-lg w-[90%]"
          >
            Send
          </button>
        </form>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center my-7 gap-3 lg:gap-8 px-10 lg:px-28 py-5 lg:py-10">
        {data.map((i: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center w-[80%] lg:w-[25%] text-sm lg:text-base gap-4 shadow-md py-4 px-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M37.5 17.5C38.8261 17.5 40.0979 18.0268 41.0355 18.9645C41.9732 19.9021 42.5 21.1739 42.5 22.5M37.5 7.5C41.4782 7.5 45.2936 9.08035 48.1066 11.8934C50.9196 14.7064 52.5 18.5218 52.5 22.5M12.5 10H22.5L27.5 22.5L21.25 26.25C23.9274 31.6788 28.3212 36.0726 33.75 38.75L37.5 32.5L50 37.5V47.5C50 48.8261 49.4732 50.0979 48.5355 51.0355C47.5979 51.9732 46.3261 52.5 45 52.5C35.2482 51.9074 26.0504 47.7662 19.1421 40.8579C12.2338 33.9496 8.09262 24.7518 7.5 15C7.5 13.6739 8.02678 12.4021 8.96447 11.4645C9.90215 10.5268 11.1739 10 12.5 10Z"
                stroke="#FC8321"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex flex-col text-center items-center justify-center">
              <span className="text-[16px] lg:text-[24px] text-orange font-semibold mb-4">
                {i.title}
              </span>
              <span className="text-start text-[10px] lg:text-[12px] mb-1">
                {i.desc1}
              </span>
              <span className="text-start text-[10px] lg:text-[12px]">
                {i.desc2}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center my-7 gap-3 lg:gap-8 px-12 lg:px-60 w-[100%]">
        <span className="flex flex-col items-start lg:w-[50%]">
          <span className="text-[28px] font-semibold">Office</span>
          <span className="mt-4 mb-8">
            108/126 chatraganga, marwadi road, opp. kurla railway station, West
            Kurla, Mumbai, Maharashtra, India.
          </span>
          <img src={Map.src} alt="map" className="w-[400px] h-full" />
        </span>
        <span className="flex flex-col items-start lf:w-[50%]">
          <span className="text-[28px] font-semibold">Factory</span>
          <span className="mt-4 mb-8">
            18, Factory Road, Sarjinagar Nagar Area, Vishramnagar, New Delhi,
            India
          </span>
          <img src={Map.src} alt="map" className="w-[400px] h-full" />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center py-7 gap-3 lg:gap-8 px-12 lg:px-28 bg-[#FEF0F0]">
        <span className="text-[16px] lg:text-[32px] font-bold mt-5 flex items-center justify-center">
          Subscribe to get updated from us
        </span>
        <span className="text-[14px] lg:text-[18px] flex items-center justify-center text-center">
          Please fill in your email. We will keep you updated on our products
          and services.
        </span>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="border border-gray rounded-lg py-2 px-4 lg:w-[50%]"
        />
        <button
          type="button"
          className="bg-orange text-white py-2 px-4 rounded-lg w-fit"
        >
          Subscribe
        </button>
      </div>
    </>
  );
};

export default page;
