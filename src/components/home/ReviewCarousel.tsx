import React, { useEffect, useState } from "react";
import StarIcon from "../../assets/icons/home/StarIcon";

const reviews = [
  {
    id: 1,
    author: "John Doe",
    content:
      "This was one of the best experiences I have ever had with a cab company. I had problems at the airport and the driver stayed with me for over an hour and helped me sort everything out. I would recommend this company to anyone. Thank you for such fabulous service!",
  },
  {
    id: 2,
    author: "Jane Smith",
    content:
      "This was one of the best experiences I have ever had with a cab company. I had problems at the airport and the driver stayed with me for over an hour and helped me sort everything out. I would recommend this company to anyone. Thank you for such fabulous service!",
  },
  {
    id: 3,
    author: "Alice Johnson",
    content:
      "This was one of the best experiences I have ever had with a cab company. I had problems at the airport and the driver stayed with me for over an hour and helped me sort everything out. I would recommend this company to anyone. Thank you for such fabulous service!",
  },
  {
    id: 4,
    author: "Bob Brown",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 5,
    author: "Eva Davis",
    content:
      "This was one of the best experiences I have ever had with a cab company. I had problems at the airport and the driver stayed with me for over an hour and helped me sort everything out. I would recommend this company to anyone. Thank you for such fabulous service!",
  },
  {
    id: 6,
    author: "Charlie Wilson",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
];

const ReviewCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
  
    // Check if the screen width is below a certain threshold to determine if it's a mobile device
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const prevSlide = () => {
      setCurrentSlide((prev) =>
        prev === 0 ? Math.floor(reviews.length / (isMobile ? 1 : 3)) - 1 : prev - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentSlide((prev) =>
        prev === Math.floor(reviews.length / (isMobile ? 1 : 3)) - 1 ? 0 : prev + 1
      );
    };
  
    const numColumns = isMobile ? 1 : 3;
    const visibleReviews = reviews.slice(currentSlide * numColumns, currentSlide * numColumns + numColumns);
  

  return (
    <div className="relative">
      <div className={`grid grid-cols-${numColumns} gap-4 mx-8 lg:mx-32 text-[#9A9A9A]`}>
        {visibleReviews.map((review) => (
          <div key={review.id} className="px-4">
            <div className="p-6 rounded-lg shadow-lg flex flex-col items-center justify-center bg-[#F9FAFB] h-[300px]">
              <StarIcon />
              <p className="text-gray-700">{review.content}</p>
              <p className="text-gray-600 mt-4">- {review.author}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 lg:left-10 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-500 hover:text-gray-800 shadow-lg"
        onClick={prevSlide}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.25 15C1.25 22.5849 7.41512 28.75 15 28.75C22.5849 28.75 28.75 22.5849 28.75 15C28.75 7.41512 22.5849 1.25 15 1.25C7.41512 1.25 1.25 7.41512 1.25 15ZM3.1686 15C3.1686 8.47674 8.47674 3.1686 15 3.1686C21.5233 3.1686 26.8314 8.47674 26.8314 15C26.8314 21.5233 21.5233 26.8314 15 26.8314C8.47674 26.8314 3.1686 21.5233 3.1686 15ZM17.2295 20.3358C17.0429 20.533 16.8066 20.625 16.5703 20.625C16.334 20.625 16.0976 20.533 15.9111 20.3358L11.5205 15.6951C11.1598 15.3139 11.1598 14.6828 11.5205 14.3016L15.9111 9.66093C16.2718 9.27969 16.8688 9.27969 17.2295 9.66093C17.5902 10.0422 17.5902 10.6732 17.2295 11.0544L13.4981 14.9984L17.2295 18.9423C17.5902 19.3235 17.5902 19.9545 17.2295 20.3358Z"
            fill="#6E6E6E"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-2 lg:right-10 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-500 hover:text-gray-800 shadow-lg"
        onClick={nextSlide}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.25 15C1.25 22.5849 7.41512 28.75 15 28.75C22.5849 28.75 28.75 22.5849 28.75 15C28.75 7.41512 22.5849 1.25 15 1.25C7.41512 1.25 1.25 7.41512 1.25 15ZM3.1686 15C3.1686 8.47674 8.47674 3.1686 15 3.1686C21.5233 3.1686 26.8314 8.47674 26.8314 15C26.8314 21.5233 21.5233 26.8314 15 26.8314C8.47674 26.8314 3.1686 21.5233 3.1686 15ZM12.7705 20.3358C12.9571 20.533 13.1934 20.625 13.4297 20.625C13.666 20.625 13.9024 20.533 14.0889 20.3358L18.4795 15.6951C18.8402 15.3139 18.8402 14.6828 18.4795 14.3016L14.0889 9.66093C13.7282 9.27969 13.1312 9.27969 12.7705 9.66093C12.4098 10.0422 12.4098 10.6732 12.7705 11.0544L16.5019 14.9984L12.7705 18.9423C12.4098 19.3235 12.4098 19.9545 12.7705 20.3358Z"
            fill="#6E6E6E"
          />
        </svg>
      </button>
    </div>
  );
};

export default ReviewCarousel;
