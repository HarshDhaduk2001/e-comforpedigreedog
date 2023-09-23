/* eslint-disable @next/next/no-img-element */
import { Product2, Product4 } from "@/assets/images/home/exportHome";
import React from "react";

const Products = [
  {
    img: Product2,
    orderId: "125df56655565689dsf",
    brand: "Himalaya",
    productName: "Meat & Rice",
    quantity: 6,
    weight: "2 Kg",
    price: 200,
  },
  {
    img: Product4,
    orderId: "125df56655565656dsf",
    brand: "Himalaya",
    productName: "Milk Chicken Bones",
    quantity: 12,
    weight: "5 Kg",
    price: 350,
  },
];

const page = () => {
  return (
    <div className="py-10 flex flex-col lg:flex-row items-start justify-center gap-20 px-[6%] lg:px-44 lg:text-[14px] select-none">
      <div className="flex flex-col items-center justify-start gap-5 w-full lg:w-[30%]">
        <div className="flex items-center justify-center w-28 h-28 rounded-full bg-orange text-white text-[48px]">
          HD
        </div>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          className="border border-gray rounded-lg py-2 px-4 w-full"
          value={"Harsh"}
        />
        <input
          type="text"
          name="name"
          placeholder="Last Name"
          className="border border-gray rounded-lg py-2 px-4 w-full"
          value={"Dhaduk"}
        />
        <input
          type="email"
          name="name"
          placeholder="Email"
          className="border border-gray rounded-lg py-2 px-4 w-full"
          value={"harsh@gmail.com"}
        />
        <input
          type="tel"
          name="name"
          placeholder="Phone"
          maxLength={10}
          className="border border-gray rounded-lg py-2 px-4 w-full"
          value={"9695999865"}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-5 lg:w-[70%]">
        <p className="font-semibold text-[40px] mt-10">Orders</p>
        <div className="flex flex-col items-center justify-between w-full gap-5">
          {Products.length > 0 ? (
            Products.map((i: any, index: number) => (
              <div
                className="flex items-center justify-between w-full"
                key={index}
              >
                <div className="flex items-center justify-start gap-5 w-full">
                  <span className="relative">
                    <img
                      src={i.img.src}
                      alt="product"
                      className="w-[60px] h-[80px]"
                    />
                    <span className="bg-blue rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold absolute -top-1 -right-1">
                      <p
                        className={`absolute -top-[1px] left-0 text-xs text-white ${
                          i.quantity.toString().length > 1
                            ? "p-1"
                            : "py-[5px] px-[8px]"
                        }`}
                      >
                        {i.quantity}
                      </p>
                    </span>
                  </span>
                  <div>
                    <p>
                      <span className="lg:hidden flex flex-col">
                        <span className="font-semibold">{i.brand}</span>
                        {i.productName}
                      </span>
                      <span className="lg:block hidden">
                        <span className="font-semibold">{i.brand}</span>
                        &nbsp;&nbsp;{i.productName}
                      </span>
                    </p>
                    <p>{i.weight}</p>
                    <p className="text-blue">{i.orderId}</p>
                  </div>
                </div>
                <p className="ml-10 lg:ml-auto">₹&nbsp;{i.quantity * i.price}</p>
              </div>
            ))
          ) : (
            <p>No records found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
