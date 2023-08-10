/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  fill: "sixty" | "thirty" | "eighty" | "twenty" | "one-hundred" | "fifty" | "ten" | "forty" | "ninety" | "seventy";
  className: any;
  indicatorClassName: any;
}

export const ViewsProgressBars = ({ fill, className, indicatorClassName }: Props): JSX.Element => {
  return (
    <div className={`views-progress-bars ${className}`}>
      <div className={`indicator ${fill} ${indicatorClassName}`} />
    </div>
  );
};

ViewsProgressBars.propTypes = {
  fill: PropTypes.oneOf([
    "sixty",
    "thirty",
    "eighty",
    "twenty",
    "one-hundred",
    "fifty",
    "ten",
    "forty",
    "ninety",
    "seventy",
  ]),
};
