/* eslint-disable @next/next/no-img-element */
import { Delete } from "@/assets/icons/singleProduct/export";
import { Product1, Product2, Product4 } from "@/assets/images/home/exportHome";
import React from "react";

const productsData = [
  {
    id: 1,
    name: "Himalaya Pet Food",
    description: "Meat & Rice",
    price: 1399.0,
    weight: "2 Kg",
    image: Product4,
  },
  {
    id: 2,
    name: "Himalaya Pet Food",
    description: "Meat & Rice",
    price: 399.0,
    weight: "250 g",
    image: Product2,
  },
  {
    id: 3,
    name: "Himalaya Pet Food",
    description: "Meat & Rice",
    price: 5999.0,
    weight: "5 kg",
    image: Product1,
  },
];

const page = () => {
  return (
    <div className="py-10 flex flex-col gap-10 px-[6%] lg:px-44 lg:text-[14px] select-none">
      <div className="text-[36px] lg:text-[48px] font-semibold flex items-start">
        Wishlist
      </div>
      <div className="flex items-center justify-between">
        <p className="flex items-center justify-center">
          Home &gt;&nbsp;
          <span className="text-orange">Wishlist</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className=" w-[26%] lg:w-auto">PRODUCT</span>
        <span className="lg:ml-20">TOTAL</span>
        <span className="lg:mr-20">REMOVE</span>
      </div>
      <hr className="bg-[#9A9A9A] h-[1px] -my-6" />
      {productsData.map((product) => (
        <>
          <div
            key={product.id}
            className="flex items-center justify-between text-[8px] lg:text-[14px]"
          >
            <div className="flex items-center justify-start gap-2 w-[40%] lg:w-[70%] text-left">
              <img
                src={product.image.src}
                alt="product"
                className="w-[50px] h-[60px] lg:w-[100px] lg:h-[120px]"
              />
              <div>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>Rs. {product.price.toFixed(2)}</p>
                <p>Weight: {product.weight}</p>
              </div>
            </div>
            <div className="text-[14px] lg:text-[18px] lg:w-[50%]">
              Rs. {product.price.toFixed(2)}
            </div>
            <div className="flex items-center justify-center w-[30%]">
              <span className="cursor-pointer">
                <Delete />
              </span>
            </div>
          </div>
          <hr className="bg-[#9A9A9A] h-[1px] -my-6" />
        </>
      ))}
    </div>
  );
};

export default page;
