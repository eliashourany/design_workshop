/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  ratio:
    | "thirty-four"
    | "twenty-three"
    | "thirty-two"
    | "nine-hundred-and-sixteen"
    | "eleven"
    | "one-hundred-and-sixty-nine"
    | "forty-three";
  className: any;
}

export const ViewsImagesRatio = ({ ratio, className }: Props): JSX.Element => {
  return <div className={`views-images-ratio ${ratio} ${className}`} />;
};

ViewsImagesRatio.propTypes = {
  ratio: PropTypes.oneOf([
    "thirty-four",
    "twenty-three",
    "thirty-two",
    "nine-hundred-and-sixteen",
    "eleven",
    "one-hundred-and-sixty-nine",
    "forty-three",
  ]),
};
