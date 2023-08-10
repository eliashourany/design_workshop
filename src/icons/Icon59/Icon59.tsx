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

export const Icon59 = ({ color = "#239C4F", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-59 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_261)">
        <path
          className="path"
          clipRule="evenodd"
          d="M10.5 4H14.5C17.8137 4 20.5 6.68629 20.5 10V14C20.5 17.3137 17.8137 20 14.5 20H4.5V10C4.5 6.68629 7.18629 4 10.5 4Z"
          fillRule="evenodd"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path className="path" d="M9.5 14H12.5" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
        <path className="path" d="M9.5 10H15.5" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_261">
          <rect className="rect" fill="white" height="24" transform="translate(0.5)" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

Icon59.propTypes = {
  color: PropTypes.string,
};
