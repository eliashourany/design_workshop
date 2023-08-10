/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  stroke: string;
  className: any;
}

export const Icon49 = ({ color = "#A1A1A1", stroke = "#A1A1A1", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-49 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M0.0625 15.9375V0.0625H15.9375V15.9375H0.0625Z" stroke={color} strokeWidth="0.125" />
      <path
        className="path"
        d="M2.5 8H13.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M9 3.5L13.5 8L9 12.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icon49.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.string,
};
