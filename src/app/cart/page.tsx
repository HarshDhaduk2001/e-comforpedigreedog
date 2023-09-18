/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Delete, Minus, Plus } from "@/assets/icons/singleProduct/export";
import {
  Product1,
  Product2,
  Product3,
  Product4,
} from "@/assets/images/home/exportHome";
import ProductCard from "@/components/home/ProductCard";
import Link from "next/link";
import React, { useState } from "react";

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

const CartPage = () => {
  const [cart, setCart] = useState(
    productsData.map((product) => ({ ...product, quantity: 1 }))
  );

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="py-10 flex flex-col gap-10 px-[6%] lg:px-44 lg:text-[14px] select-none">
      <div className="text-[36px] lg:text-[48px] font-semibold flex items-start gap-10">
        Woffy Cart
      </div>
      <div className="flex items-center justify-between">
        <span className="text-orange">Cart</span>
        <Link href={"/products"} className="underline text-gray">
          Continue Shopping
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <span className=" w-[26%] lg:w-auto">PRODUCT</span>
        <span className="lg:ml-20">QUANTITY</span>
        <span>TOTAL</span>
      </div>
      <hr className="bg-[#9A9A9A] h-[1px] -my-6" />
      {cart.map((product) => (
        <>
          <div
            key={product.id}
            className="flex items-center justify-between text-[8px] lg:text-[14px]"
          >
            <div className="flex items-center justify-start gap-2 w-[40%] lg:w-[30%] text-left">
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
            <div className="flex items-center justify-center gap-2 w-[30%]">
              <span className="flex items-center justify-center border border-[#9A9A9A] rounded-full py-1 px-2 lg:px-8 lg:text-[24px] gap-4 lg:gap-8 w-[100%] lg:w-auto">
                <span
                  onClick={() =>
                    updateQuantity(
                      product.id,
                      Math.max(1, product.quantity - 1)
                    )
                  }
                >
                  <Minus />
                </span>
                <span className="text-[14px]">{product.quantity}</span>
                <span
                  onClick={() =>
                    updateQuantity(product.id, product.quantity + 1)
                  }
                >
                  <Plus />
                </span>
              </span>
              <span>
                <Delete />
              </span>
            </div>
            <div className="text-[14px] lg:text-[18px] w-[25%] lg:w-[20%] text-right">
              Rs. {(product.price * product.quantity).toFixed(2)}
            </div>
          </div>
          <hr className="bg-[#9A9A9A] h-[1px] -my-6" />
        </>
      ))}
      <div className="flex flex-col items-end justify-end">
        <div className="text-[14px] lg:text-[18px] flex items-center justify-center gap-16 lg:gap-28">
          <span className="text-[16px] lg:text-[24px]">Sub total</span>
          <span className="text-[14px] lg:text-[18px]">
            Rs. {calculateTotalPrice().toFixed(2)}
          </span>
        </div>
        <p className="text-[12px] lg:text-[14px] mt-2 mb-4">
          Tax included. Shipping calculated at checkout.
        </p>
        <Link href={"/checkout"}>
          <button className="py-2 bg-orange text-white rounded-full w-full px-5 lg:px-24">
            CHECKOUT
          </button>
        </Link>
      </div>
      {/* more similar products */}
      <div className="mb-8">
        <p className="text-[18px] lg:text-[24px] mb-6">
          Continue Shopping some more
        </p>
        <ProductCard ProductData={ProductData} Scroll={true} />
      </div>
    </div>
  );
};

export default CartPage;
