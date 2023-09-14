/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

interface ImageGalleryProps {}

const ImageGallery = ({ images }: any) => {
  const [selectedImage, setSelectedImage] = useState<any | null>(images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {selectedImage && (
        <div className="flex justify-center mt-4">
          <img
            src={selectedImage.src}
            alt="Large Image"
            className="w-[550px] h-[500px]"
          />
        </div>
      )}
      <div className="flex items-center justify-center">
        {images.map((image: any, index: number) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            className="w-16 h-16 m-2 cursor-pointer transform hover:scale-110"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
