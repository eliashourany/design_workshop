/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Icon37 = ({ color = "#28B45B", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-37 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_203)">
        <path
          className="path"
          clipRule="evenodd"
          d="M10 4H14C17.3137 4 20 6.68629 20 10V14C20 17.3137 17.3137 20 14 20H4V10C4 6.68629 6.68629 4 10 4Z"
          fillRule="evenodd"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path className="path" d="M9 14H12" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
        <path className="path" d="M9 10H15" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_203">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

Icon37.propTypes = {
  color: PropTypes.string,
};
