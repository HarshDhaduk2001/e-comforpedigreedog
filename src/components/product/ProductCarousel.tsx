/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductCarousel = ({ items }: any) => {
  return (
    <div className="flex items-center justify-center">
      {items.map((i: any, index: number) => (
        <img src={i.src} key={index} alt={i} />
      ))}
    </div>
  );
};

export default ProductCarousel;
