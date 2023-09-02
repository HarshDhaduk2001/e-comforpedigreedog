/* eslint-disable @next/next/no-img-element */
import React from "react";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";
import Linkedin from "../../assets/images/linkedin.png";

const images = [Facebook.src, Instagram.src, Twitter.src, Linkedin.src];

const Footer = () => {
  return (
    <footer className="bg-blue flex flex-col items-center justify-center text-sm lg:text-base py-5 w-[100%] text-white">
      <span className="hidden lg:flex w-[80%]">
        <b>Parents also searched:</b> Dog Food | Dry Dog Food | Cat Food | Wet
        Cat Food | Woffy Treats | Royal Canin | Woffy Deals | Royal Canin Dog
        Food | Pedigree Food | Whiskas | Cat Litter & Accessories | Cat Toys |
        Natural Treats | Fun Toys | New Products | Personalized Tags | Dog
        Collars & Leashes | Cat Harnesses | Sheba Cat Food | Hay | Vitamins &
        Supplements
      </span>

      <div className="my-6 hidden lg:flex justify-center gap-20">
        <div className="flex flex-col">
          <b className="mb-2">Follow Us</b>
          <span className="flex items-center justify-center gap-1">
            {images.map((image: any, index) => (
              <img key={index} src={image} alt={index.toString()} />
            ))}
          </span>
        </div>

        <div className="flex flex-col">
          <b className="mb-2">Online Shopping</b>
          <span>Terms Of Use</span>
          <span>Privacy Policy</span>
          <span>Return Policy</span>
          <span>Shipping Policy</span>
          <span>FAQs</span>
          <span>Return Centre</span>
          <span>Contact Us</span>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <b className="mb-2">The woffy Difference</b>
            <span>About Us</span>
            <span>Articles</span>
            <span>Giving Back</span>
          </div>
          <div className="flex flex-col">
            <b className="my-2">Out Community</b>
            <span>Community</span>
            <span>Blogs</span>
            <span>Careers</span>
          </div>
        </div>

        <div className="flex flex-col">
          <b className="mb-2">Online Shopping</b>
          <span>Food</span>
          <span>Clothing</span>
          <span>Accessories</span>
          <span>Vaccine</span>
          <span>Treat & Toys</span>
          <span>Pet Essentials</span>
          <span>Health</span>
        </div>

        <div className="flex flex-col">
          <b className="mb-2">Sign Up</b>
          <span>For us it’s all about the love the Pets!</span>
          <span>
            Subscribe to our Newsletter & receive
            <br />
            special promotion and fun events
          </span>
          <span className="mt-2">
            <input
              type="email"
              className="py-1 px-3 mr-2 border border-[#FC8321] rounded-lg focus:border-blue outline-none"
            />
            <button className="text-[#FC8321] py-1 px-3 border border-[#FC8321] rounded-lg bg-white hover:text-blue hover:border-blue">
              Submit
            </button>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span>Price is in Indian rupees and excludes GST</span>
        <span>© 2023 Woffy Stores Private Limited. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
