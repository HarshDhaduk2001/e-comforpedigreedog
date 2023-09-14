import React from "react";

const StarIcon = ({ width = 15, height = 15 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0L9.39561 4.89092L14.6329 5.18237L10.5672 8.49658L11.9084 13.5676L7.5 10.725L3.09161 13.5676L4.43284 8.49658L0.367076 5.18237L5.60439 4.89092L7.5 0Z"
        fill="#FC8321"
      />
    </svg>
  );
};

export default StarIcon;
