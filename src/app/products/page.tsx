/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import ProductCard from "@/components/home/ProductCard";
import React, { useEffect, useRef, useState } from "react";
import {
  Product1,
  Product2,
  Product3,
  Product4,
} from "@/assets/images/home/exportHome";
import { Arrow } from "@/assets/icons/singleProduct/export";

const ProductData = [
  {
    id: 1,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: 10,
    productCount: 52,
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

const page = () => {
  const [categoryDrawer, setCategoryDrawer] = useState(true);
  const [brandDrawer, setBrandDrawer] = useState(true);
  const [priceDrawer, setPriceDrawer] = useState(true);
  const [filter, setFilter] = useState(false);
  const filterRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-10">
      <div className="text-[48px] font-bold flex items-center justify-center gap-10">
        Products
        <span
          className="flex items-center justify-center text-[20px] lg:hidden mt-3 cursor-pointer"
          onClick={() => setFilter(!filter)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
          </svg>
          &nbsp;Filter
        </span>
      </div>
      <div className="flex justify-center w-full lg:px-56">
        <div className="w-[30%] px-10 gap-1 hidden lg:block">
          <div className="flex flex-col">
            <div className="text-[20px] flex items-center justify-between">
              <span>Category</span>
              <span
                className={`${categoryDrawer && "rotate-180"} cursor-pointer`}
                onClick={() => setCategoryDrawer(!categoryDrawer)}
              >
                <Arrow />
              </span>
            </div>
            {categoryDrawer && (
              <div className="flex flex-col gap-1">
                <span>
                  <input type="checkbox" id="Food" name="Food" value="Food" />
                  <label htmlFor="Food">&nbsp;Food</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Clothes"
                    name="Clothes"
                    value="Clothes"
                  />
                  <label htmlFor="Clothes">&nbsp;Clothes</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Suppliments"
                    name="Suppliments"
                    value="Suppliments"
                  />
                  <label htmlFor="Suppliments">&nbsp;Suppliments</label>
                </span>
                <span>
                  <input type="checkbox" id="Toys" name="Toys" value="Toys" />
                  <label htmlFor="Toys">&nbsp;Toys</label>
                </span>
                <br />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <div className="text-[20px] flex items-center justify-between">
              <span>Brand</span>
              <span
                className={`${brandDrawer && "rotate-180"} cursor-pointer`}
                onClick={() => setBrandDrawer(!brandDrawer)}
              >
                <Arrow />
              </span>
            </div>
            {brandDrawer && (
              <div className="flex flex-col gap-1">
                <span>
                  <input
                    type="checkbox"
                    id="Himalaya"
                    name="Himalaya"
                    value="Himalaya"
                  />
                  <label htmlFor="Himalaya">&nbsp;Himalaya</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Patanjali"
                    name="Patanjali"
                    value="Patanjali"
                  />
                  <label htmlFor="Patanjali">&nbsp;Patanjali</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Petzzing"
                    name="Petzzing"
                    value="Petzzing"
                  />
                  <label htmlFor="Petzzing">&nbsp;Petzzing</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Supertails"
                    name="Supertails"
                    value="Supertails"
                  />
                  <label htmlFor="Supertails">&nbsp;Supertails</label>
                </span>
                <br />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <div className="text-[20px] flex items-center justify-between">
              <span>Price</span>
              <span
                className={`${priceDrawer && "rotate-180"} cursor-pointer`}
                onClick={() => setPriceDrawer(!priceDrawer)}
              >
                <Arrow />
              </span>
            </div>
            {priceDrawer && (
              <div className="flex flex-col gap-1">
                <span>
                  <input type="checkbox" id="100" name="100" value="100" />
                  <label htmlFor="100">&nbsp;below 100</label>
                </span>
                <span>
                  <input type="checkbox" id="200" name="200" value="200" />
                  <label htmlFor="200">&nbsp;below 200</label>
                </span>
                <span>
                  <input type="checkbox" id="300" name="300" value="300" />
                  <label htmlFor="300">&nbsp;below 300</label>
                </span>
                <span>
                  <input type="checkbox" id="400" name="400" value="400" />
                  <label htmlFor="400">&nbsp;below 400</label>
                </span>
                <span>
                  <input type="checkbox" id="500" name="500" value="500" />
                  <label htmlFor="500">&nbsp;below 500</label>
                </span>
                <br />
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 py-4 gap-8 md:gap-12 lg:gap-16 w-full lg:w-[70%]">
          <ProductCard ProductData={ProductData} />
          <ProductCard ProductData={ProductData} />
          <ProductCard ProductData={ProductData} />
          <ProductCard ProductData={ProductData} />
        </div>
      </div>

      {filter && (
        <div
          ref={filterRef}
          className="px-10 gap-1 bg-white shadow-md h-screen fixed top-44 right-0 z-50"
        >
          <div className="flex flex-col">
            <div className="text-[20px] flex items-center justify-between">
              <span>Category</span>
              <span
                className={`${categoryDrawer && "rotate-180"} cursor-pointer`}
                onClick={() => setCategoryDrawer(!categoryDrawer)}
              >
                <Arrow />
              </span>
            </div>
            {categoryDrawer && (
              <div className="flex flex-col gap-1">
                <span>
                  <input type="checkbox" id="Food" name="Food" value="Food" />
                  <label htmlFor="Food">&nbsp;Food</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Clothes"
                    name="Clothes"
                    value="Clothes"
                  />
                  <label htmlFor="Clothes">&nbsp;Clothes</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Suppliments"
                    name="Suppliments"
                    value="Suppliments"
                  />
                  <label htmlFor="Suppliments">&nbsp;Suppliments</label>
                </span>
                <span>
                  <input type="checkbox" id="Toys" name="Toys" value="Toys" />
                  <label htmlFor="Toys">&nbsp;Toys</label>
                </span>
                <br />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <div className="text-[20px] flex items-center justify-between">
              <span>Brand</span>
              <span
                className={`${brandDrawer && "rotate-180"} cursor-pointer`}
                onClick={() => setBrandDrawer(!brandDrawer)}
              >
                <Arrow />
              </span>
            </div>
            {brandDrawer && (
              <div className="flex flex-col gap-1">
                <span>
                  <input
                    type="checkbox"
                    id="Himalaya"
                    name="Himalaya"
                    value="Himalaya"
                  />
                  <label htmlFor="Himalaya">&nbsp;Himalaya</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Patanjali"
                    name="Patanjali"
                    value="Patanjali"
                  />
                  <label htmlFor="Patanjali">&nbsp;Patanjali</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Petzzing"
                    name="Petzzing"
                    value="Petzzing"
                  />
                  <label htmlFor="Petzzing">&nbsp;Petzzing</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Supertails"
                    name="Supertails"
                    value="Supertails"
                  />
                  <label htmlFor="Supertails">&nbsp;Supertails</label>
                </span>
                <br />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <div className="text-[20px] flex items-center justify-between">
              <span>Price</span>
              <span
                className={`${priceDrawer && "rotate-180"} cursor-pointer`}
                onClick={() => setPriceDrawer(!priceDrawer)}
              >
                <Arrow />
              </span>
            </div>
            {priceDrawer && (
              <div className="flex flex-col gap-1">
                <span>
                  <input type="checkbox" id="100" name="100" value="100" />
                  <label htmlFor="100">&nbsp;below 100</label>
                </span>
                <span>
                  <input type="checkbox" id="200" name="200" value="200" />
                  <label htmlFor="200">&nbsp;below 200</label>
                </span>
                <span>
                  <input type="checkbox" id="300" name="300" value="300" />
                  <label htmlFor="300">&nbsp;below 300</label>
                </span>
                <span>
                  <input type="checkbox" id="400" name="400" value="400" />
                  <label htmlFor="400">&nbsp;below 400</label>
                </span>
                <span>
                  <input type="checkbox" id="500" name="500" value="500" />
                  <label htmlFor="500">&nbsp;below 500</label>
                </span>
                <br />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
