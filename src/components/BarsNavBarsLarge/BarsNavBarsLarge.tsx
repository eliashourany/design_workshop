/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { User } from "../../icons/User";
import { ControlsButtons } from "../ControlsButtons";
import "./style.css";

interface Props {
  mode: "light";
  rightAction: "none" | "icon" | "button";
  caption: boolean;
  className: any;
  text: string;
  text1: string;
}

export const BarsNavBarsLarge = ({
  mode,
  rightAction,
  caption,
  className,
  text = "Large Title",
  text1 = "A caption",
}: Props): JSX.Element => {
  return (
    <div className={`bars-nav-bars-large caption-${caption} right-action-${rightAction} ${className}`}>
      {!caption && rightAction === "none" && <div className="large-title">{text}</div>}

      {caption && rightAction === "none" && (
        <>
          <div className="large-title-2">{text}</div>
          <div className="a-caption">{text1}</div>
        </>
      )}

      {["button", "icon"].includes(rightAction) && (
        <div className="title-2">
          {caption && (
            <>
              <div className="large-title-3">{text}</div>
              <div className="a-caption-2">{text1}</div>
            </>
          )}

          {!caption && <>{text}</>}
        </div>
      )}

      {rightAction === "button" && (
        <ControlsButtons
          className={`${!caption ? "class" : "class-2"}`}
          icon={false}
          iconPosition="none"
          mode="light"
          size="small"
          state="default"
          text1="Button"
          textPosition="center"
          type="primary"
        />
      )}

      {rightAction === "icon" && <User className={`${!caption ? "class-3" : "class-4"}`} />}
    </div>
  );
};

BarsNavBarsLarge.propTypes = {
  mode: PropTypes.oneOf(["light"]),
  rightAction: PropTypes.oneOf(["none", "icon", "button"]),
  caption: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
};
