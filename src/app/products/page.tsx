import ProductCard from "@/components/home/ProductCard";
import React from "react";

const page = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-10">
      <div className="text-[48px] font-bold">Products</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full py-4 gap-8 md:gap-12 lg:gap-16 lg:px-56">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default page;
