"use client";

import React, { useState } from "react";
import LogoIcon from "../../assets/icons/commonIcons/LogoIcon";
import SearchIcon from "../../assets/icons/commonIcons/SearchIcon";
import PhoneIcon from "../../assets/icons/commonIcons/PhoneIcon";
import AvatarIcon from "../../assets/icons/commonIcons/AvatarIcon";
import CartIcon from "../../assets/icons/commonIcons/CartIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItem = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "About Us", link: "/aboutUs" },
  { name: "Contact Us", link: "/contactUs" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#FEF8F0] cursor-pointer sticky top-0 z-10 shadow-xl">
      <div className="bg-black h-2"></div>
      <div className="flex items-center justify-center w-[100%] py-8 lg:py-4 h-[60px]">
        <span className="items-center justify-center hidden lg:flex">
          <LogoIcon />
        </span>
        <div className="lg:hidden flex w-[20%] ml-6">
          <button
            type="button"
            className="lg:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <>
                <div className="w-6 h-1 rounded-full bg-[#111111] transform rotate-45"></div>
                <div className="w-6 h-1 rounded-full bg-[#111111] transform -rotate-45"></div>
              </>
            ) : (
              <>
                <div className="w-8 h-1 rounded-full bg-[#111111]"></div>
                <div className="w-6 h-1 rounded-full bg-[#111111] my-1"></div>
                <div className="w-4 h-1 rounded-full bg-[#111111]"></div>
              </>
            )}
          </button>
        </div>
        <div className="relative w-[60%]">
          <span className="absolute left-5 top-3 h-5 w-5 text-gray-400">
            <SearchIcon />
          </span>
          <input
            className="pl-10 lg:pl-16 pr-4 py-2 w-[100%] border rounded-full border-[#111111] focus:outline-none focus:border-blue-500 placeholder-[#E1E1E1]"
            placeholder="Search anything for pet..."
          />
        </div>
        <div className="flex items-center justify-center w-[30%] gap-3 lg:gap-8">
          <span className="items-center justify-center gap-1 hidden lg:flex">
            <PhoneIcon />
            Support
          </span>
          <span className="flex items-center justify-center gap-1">
            <AvatarIcon />
            <span className="hidden lg:flex">Account</span>
          </span>
          <span className="flex items-center justify-center gap-1">
            <span className="relative">
              <CartIcon />
              <span className="bg-[#FFA45A] rounded-full w-4 h-4 flex items-center justify-center text-white text-sm font-bold absolute -top-2 -right-2">
                <p className="absolute -top-[1px] left-0 text-xs text-white">
                  10
                </p>
              </span>
            </span>
            <span className="hidden lg:flex">Cart</span>
          </span>
        </div>
      </div>

      <div className="gap-12 mt-4 pb-2 text-lg hidden lg:flex items-center justify-center">
        {navItem.map((i: any) => (
          <Link
            href={i.link}
            key={i.name}
            className={
              pathname === i.link
                ? "text-[#FF6E6E] border-b border-b-[#FF6E6E]"
                : "text-[#2F2F2F]"
            }
          >
            {i.name}
          </Link>
        ))}
      </div>

      {isOpen && (
        <div className="z-10 fixed bg-[#FEF8F0] w-full mx-auto py-8 text-center h-screen">
          <div className="gap-12 mt-4 pb-2 text-lg flex flex-col items-center justify-center">
            {navItem.map((i: any) => (
              <Link
                href={i.link}
                key={i.name}
                className={
                  pathname === i.link
                    ? "text-[#FF6E6E] border-b border-b-[#FF6E6E]"
                    : "text-[#2F2F2F]"
                }
                onClick={toggleMenu}
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
