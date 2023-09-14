import ProductCard from "@/components/home/ProductCard";
import React from "react";
import {
  Product1,
  Product2,
  Product3,
  Product4,
} from "@/assets/images/home/exportHome";

const ProductData = [
  {
    id: 1,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: "10",
    productCount: "52",
    img: Product1,
    productPrice: 179,
    productRating: 4.8,
    productReviewCount: 20,
  },
  {
    id: 2,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: "40",
    productCount: "20",
    img: Product2,
    productPrice: 499,
    productRating: 4.5,
    productReviewCount: 20,
  },
  {
    id: 3,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: "10",
    productCount: "30",
    img: Product3,
    productPrice: 200,
    productRating: 3.1,
    productReviewCount: 20,
  },
  {
    id: 4,
    productName: "Wiskas Dry Food for all Breeds - Orignal",
    brandName: "Whiskas",
    savePercentage: "15",
    productCount: "40",
    img: Product4,
    productPrice: 200,
    productRating: 3.1,
    productReviewCount: 20,
  },
];

const page = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-10">
      <div className="text-[48px] font-bold">Products</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full py-4 gap-8 md:gap-12 lg:gap-16 lg:px-56">
        <ProductCard ProductData={ProductData} />
      </div>
    </div>
  );
};

export default page;
