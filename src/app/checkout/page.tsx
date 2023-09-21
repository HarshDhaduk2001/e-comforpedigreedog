/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Checkout from "../../assets/images/common/Checkout.png";
import Link from "next/link";
import { Product2, Product4 } from "@/assets/images/home/exportHome";

const Products = [
  {
    img: Product2,
    brand: "Himalaya",
    productName: "Meat & Rice",
    quantity: 6,
    weight: "2 Kg",
    price: 200,
  },
  {
    img: Product4,
    brand: "Himalaya",
    productName: "Milk Chicken Bones",
    quantity: 12,
    weight: "5 Kg",
    price: 350,
  },
];

const page = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [address, setAddress] = useState("");
  const [addressErr, setAddressErr] = useState(false);
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const totalPrice = Products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    setFirstNameErr(
      firstName.trim().length < 3 || firstName.trim().length > 15
    );
    setLastNameErr(lastName.trim().length < 3 || lastName.trim().length > 15);
    setEmailErr(
      email.trim().length < 10 ||
        email.trim().length > 30 ||
        !emailRegex.test(email.trim())
    );
    setAddressErr(address.trim().length < 3 || address.trim().length > 50);

    const hasError =
      firstName.trim().length < 3 ||
      firstName.trim().length > 15 ||
      lastName.trim().length < 3 ||
      lastName.trim().length > 15 ||
      email.trim().length < 10 ||
      email.trim().length > 30 ||
      emailRegex.test(email.trim()) ||
      address.trim().length < 3 ||
      address.trim().length > 50;

    if (!hasError) {
      console.log(firstName, lastName, email, address);
    }
  };
  return (
    <div className="flex gap-10lg:px-44 lg:text-[16px] select-none">
      <div className="flex flex-col items-start w-[50%] py-10 pl-[12%] ">
        <img src={Checkout.src} alt="img" />
        <p className="flex items-center justify-center py-5">
          Home &gt; Cart &gt;&nbsp;
          <span className="text-orange">Information</span>
        </p>
        <p className="text-[20px]">Shipping address</p>
        <form
          className="flex flex-col items-start justify-center gap-5 w-full mt-8 lg:mt-5 pr-16"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center gap-2 w-[100%]">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className={`border rounded-lg py-2 px-4 w-full ${
                firstNameErr
                  ? "border-[#FF0000] placeholder:text-[#FF0000]"
                  : "border-gray"
              }`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={(e) =>
                e.target.value.trim().length < 3 ||
                e.target.value.trim().length > 15
                  ? setFirstNameErr(true)
                  : setFirstNameErr(false)
              }
            />
            <input
              type="text"
              name="name"
              placeholder="Last Name"
              className={`border rounded-lg py-2 px-4 w-full ${
                lastNameErr
                  ? "border-[#FF0000] placeholder:text-[#FF0000]"
                  : "border-gray"
              }`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={(e) =>
                e.target.value.trim().length < 3 ||
                e.target.value.trim().length > 15
                  ? setLastNameErr(true)
                  : setLastNameErr(false)
              }
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className={`border rounded-lg py-2 px-4 w-full ${
              emailErr
                ? "border-[#FF0000] placeholder:text-[#FF0000]"
                : "border-gray"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => {
              const emailRegex =
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

              if (
                e.target.value.trim().length < 10 ||
                e.target.value.trim().length > 30 ||
                !emailRegex.test(e.target.value.trim())
              ) {
                setEmailErr(true);
              } else {
                setEmailErr(false);
              }
            }}
          />
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            className={`border rounded-lg py-2 px-4 w-full ${
              addressErr
                ? "border-[#FF0000] placeholder:text-[#FF0000]"
                : "border-gray"
            }`}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={(e) =>
              e.target.value.trim().length < 3 ||
              e.target.value.trim().length > 50
                ? setAddressErr(true)
                : setAddressErr(false)
            }
          />
          <div className="flex items-center justify-center gap-2">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="border border-gray rounded-lg py-2 px-4 w-[40%]"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="border border-gray rounded-lg py-2 px-4 w-[40%]"
            />
            <input
              type="number"
              name="pincode"
              placeholder="Pin Code"
              className="border border-gray rounded-lg py-2 px-4 w-[40%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <input
            type="tel"
            name="tel"
            placeholder="Enter Phone No."
            className="border border-gray rounded-lg py-2 px-4 w-full"
          />
          <div className="flex items-center justify-center gap-2 px-4 lg:px-0">
            <input type="checkbox" name="check" className="w-4 h-4" />
            <label
              htmlFor="Save my name, email, and website in this browser for the next time I comment."
              className="text-[10px] lg:text-[16px]"
            >
              Save this information for next time
            </label>
          </div>
          <div className="flex items-center justify-between w-full">
            <Link href={"/cart"} className="text-orange text-[16px]">
              &lt; Return to cart
            </Link>
            <button
              type="submit"
              className="bg-orange text-white py-2 px-4 rounded-lg"
            >
              Continue to shipping
            </button>
          </div>
        </form>
        <p className="flex items-center justify-between text-blue border-t border-[#9A9A9A] w-[90%] mt-5 pt-5">
          <Link href={""}>Refund Policy</Link>
          <Link href={""}>Shipping Policy</Link>
          <Link href={""}>Terms of service</Link>
          <Link href={""}>Privacy Policy</Link>
        </p>
      </div>
      <div className="flex items-start justify-start w-[50%] bg-[#F6F6F6] py-20 pr-[12%] pl-[5%]">
        <div className="flex flex-col items-center justify-between w-full gap-5">
          {Products.map((i: any, index: number) => (
            <div
              className="flex items-center justify-between w-full"
              key={index}
            >
              <div className="flex items-center justify-start gap-2 w-full">
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
                    <span className="font-semibold">{i.brand}</span>{" "}
                    {i.productName}
                  </p>
                  <p>{i.weight}</p>
                </div>
              </div>
              <p>₹&nbsp;{i.quantity * i.price}</p>
            </div>
          ))}
          <div className="flex items-center justify-between w-full border-t border-bg-[#9A9A9A] mt-5 pt-7">
            <p className="flex flex-col items-start justify-normal text-[12px]">
              <span className="text-[16px]">Total</span>
              <span>Including all taxes</span>
              <span>Shipping Calculated at next step</span>
            </p>
            <p className="text-[12px]">
              INR{" "}
              <span className="text-[24px]">
                ₹{(totalPrice * 1.18).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
