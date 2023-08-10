/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon5 } from "../../icons/Icon5";
import "./style.css";

interface Props {
  mode: "light";
  selected: boolean;
  state: "disabled" | "pressed" | "default";
  className: any;
  icon5StyleOverrideClassName: any;
}

export const ControlsCheckboxes = ({
  mode,
  selected,
  state,
  className,
  icon5StyleOverrideClassName,
}: Props): JSX.Element => {
  return (
    <div className={`controls-checkboxes ${state} selected-${selected} ${className}`}>
      {selected && <Icon5 className={icon5StyleOverrideClassName} color={state === "disabled" ? "#B9B9B9" : "white"} />}
    </div>
  );
};

ControlsCheckboxes.propTypes = {
  mode: PropTypes.oneOf(["light"]),
  selected: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "pressed", "default"]),
};
