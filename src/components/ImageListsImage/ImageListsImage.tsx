/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon7 } from "../../icons/Icon7";
import { ViewsImagesRatio } from "../ViewsImagesRatio";
import "./style.css";

interface Props {
  type: "category" | "store" | "food";
  viewsImagesRatioRatioClassName: any;
  text: string;
}

export const ImageListsImage = ({ type, viewsImagesRatioRatioClassName, text = "Asian" }: Props): JSX.Element => {
  return (
    <div className={`image-lists-image ${type}`}>
      {type === "store" && (
        <div className="controls-chips-pill">
          <div className="chip">FREE DELIVERY</div>
        </div>
      )}

      <ViewsImagesRatio
        className={`${type === "store" ? "class-5" : viewsImagesRatioRatioClassName}`}
        ratio={type === "store" ? "one-hundred-and-sixty-nine" : "eleven"}
      />
      {["food", "store"].includes(type) && (
        <>
          <div className="sunset-bagels">
            {type === "store" && <>Sunset Bagels</>}

            {type === "food" && <>Smoked Salmon</>}
          </div>
          <div className="burger-sandwich">
            {type === "store" && <>Burger, Sandwich, Coffee</>}

            {type === "food" && <>Bagels</>}
          </div>
        </>
      )}

      {type === "store" && (
        <div className="frame">
          <div className="text-wrapper-2">$$&nbsp;&nbsp;·&nbsp;&nbsp;10-20min</div>
          <div className="frame-2">
            <Icon7 className="icon-7" />
            <div className="text-wrapper-3">4.8</div>
            <div className="text-wrapper-2">(5)</div>
          </div>
        </div>
      )}

      {type === "food" && <div className="text-wrapper-4">$15.30</div>}

      {type === "category" && <div className="asian">{text}</div>}
    </div>
  );
};

ImageListsImage.propTypes = {
  type: PropTypes.oneOf(["category", "store", "food"]),
  text: PropTypes.string,
};
