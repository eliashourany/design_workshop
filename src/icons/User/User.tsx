/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const User = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`user ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M19.9999 18.3333C22.3011 18.3333 24.1666 16.4679 24.1666 14.1667C24.1666 11.8655 22.3011 10 19.9999 10C17.6987 10 15.8333 11.8655 15.8333 14.1667C15.8333 16.4679 17.6987 18.3333 19.9999 18.3333Z"
        fillRule="evenodd"
        stroke="#060606"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M10 33.3334C10 27.8105 14.4772 23.3334 20 23.3334C25.5228 23.3334 30 27.8105 30 33.3334"
        stroke="#060606"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
