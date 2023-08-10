/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon37 } from "../../icons/Icon37";
import { Icon49 } from "../../icons/Icon49";
import { Icon59 } from "../../icons/Icon59";
import "./style.css";

interface Props {
  mode: "light";
  size: "block" | "large" | "small";
  type: "primary" | "outline" | "secondary" | "transparent";
  state: "disabled" | "pressed" | "default";
  icon: boolean;
  iconPosition: "side" | "none" | "right" | "left";
  textPosition: "center" | "left";
  className: any;
  textClassName: any;
  text: string;
  override: JSX.Element;
  text1: string;
}

export const ControlsButtons = ({
  mode,
  size,
  type,
  state,
  icon,
  iconPosition,
  textPosition,
  className,
  textClassName,
  text = "Block + Primary",
  override = <Icon49 className="icon-22" color="white" stroke="white" />,
  text1 = "Small + Primary",
}: Props): JSX.Element => {
  return (
    <div className={`controls-buttons ${size} ${type} ${iconPosition} state-${state} ${className}`}>
      {(iconPosition === "none" || (iconPosition === "side" && size === "block")) && (
        <div className={`text-5 size-${size} icon-position-${iconPosition} icon-${icon} type-${type} state-0-${state}`}>
          {type === "primary" && iconPosition === "none" && size === "block" && <>{text}</>}

          {iconPosition === "side" && ["outline", "primary", "transparent"].includes(type) && (
            <Icon37
              className="instance-node"
              color={
                type === "primary" && ["default", "pressed"].includes(state)
                  ? "white"
                  : state === "disabled"
                  ? "#A1A1A1"
                  : type === "outline" && state === "pressed"
                  ? "#239C4F"
                  : "#28B45B"
              }
            />
          )}

          {type === "primary" && size === "small" && <>{text1}</>}

          {type === "secondary" && size === "small" && <>Small + Secondary</>}

          {type === "primary" && size === "large" && <>Large + Primary</>}

          {type === "secondary" && icon && (
            <Icon59 className="instance-node" color={state === "disabled" ? "#A1A1A1" : "#239C4F"} />
          )}

          {icon && (
            <div className="text-2">
              {type === "primary" && <>{text}</>}

              {type === "outline" && <>Block + Outline</>}

              {type === "transparent" && <>Block + Transparent</>}

              {type === "secondary" && <>Block + Secondary</>}
            </div>
          )}

          {type === "transparent" && iconPosition === "none" && size === "block" && <>Block + Transparent</>}

          {size === "small" && type === "transparent" && <>Small + Transparent</>}

          {type === "transparent" && size === "large" && <>Large + Transparent</>}

          {type === "secondary" && size === "large" && <>Large + Secondary</>}

          {type === "secondary" && iconPosition === "none" && size === "block" && <>Block + Secondary</>}

          {type === "outline" && size === "small" && <>Small + Outline</>}

          {iconPosition === "none" && type === "outline" && size === "block" && <>Block + Outline</>}

          {type === "outline" && size === "large" && <>Large + Outline</>}
        </div>
      )}

      {(iconPosition === "right" || (iconPosition === "left" && size === "block")) && (
        <>
          <div
            className={`text-3 text-position-${textPosition} size-0-${size} state-2-${state} type-1-${type} ${textClassName}`}
          >
            {type === "primary" && size === "block" && <>{text}</>}

            {type === "primary" && size === "small" && <>{text1}</>}

            {type === "primary" && size === "large" && <>Large + Primary</>}

            {type === "secondary" && size === "block" && <>Block + Secondary</>}

            {type === "secondary" && size === "small" && <>Small + Secondary</>}

            {type === "secondary" && size === "large" && <>Large + Secondary</>}

            {type === "outline" && size === "block" && <>Block + Outline</>}

            {type === "outline" && size === "small" && <>Small + Outline</>}

            {type === "outline" && size === "large" && <>Large + Outline</>}
          </div>
          {override}
        </>
      )}

      {iconPosition === "left" && size === "small" && (
        <Icon49
          className="icon-49"
          color={
            type === "primary" && ["default", "pressed"].includes(state)
              ? "white"
              : state === "disabled" && ["primary", "secondary"].includes(type)
              ? "#A1A1A1"
              : state === "default" && ["outline", "secondary"].includes(type)
              ? "#28B45B"
              : state === "pressed" && ["outline", "secondary"].includes(type)
              ? "#239C4F"
              : type === "outline" && state === "disabled"
              ? "#B9B9B9"
              : undefined
          }
          stroke={
            type === "primary" && ["default", "pressed"].includes(state)
              ? "white"
              : state === "disabled"
              ? "#A1A1A1"
              : state === "default" && ["outline", "secondary"].includes(type)
              ? "#28B45B"
              : state === "pressed" && ["outline", "secondary"].includes(type)
              ? "#239C4F"
              : undefined
          }
        />
      )}

      {((iconPosition === "left" && size === "large") ||
        (iconPosition === "side" && size === "large") ||
        (iconPosition === "side" && size === "small")) && (
        <Icon37
          className={`${size === "large" ? "instance-node" : "icon-49"}`}
          color={
            type === "primary" && ["default", "pressed"].includes(state)
              ? "white"
              : state === "disabled"
              ? "#A1A1A1"
              : (size === "large" && state === "pressed" && type === "transparent") ||
                (state === "pressed" && type === "outline") ||
                (state === "pressed" && type === "secondary")
              ? "#239C4F"
              : "#28B45B"
          }
        />
      )}

      {((iconPosition === "left" && size === "large") ||
        (iconPosition === "left" && size === "small") ||
        (iconPosition === "side" && size === "large") ||
        (iconPosition === "side" && size === "small")) && (
        <div className="text-4">
          {type === "primary" && size === "small" && <>{text1}</>}

          {type === "primary" && size === "large" && <>Large + Primary</>}

          {type === "secondary" && size === "small" && <>Small + Secondary</>}

          {type === "secondary" && size === "large" && <>Large + Secondary</>}

          {type === "outline" && size === "small" && <>Small + Outline</>}

          {type === "outline" && size === "large" && <>Large + Outline</>}

          {size === "small" && type === "transparent" && <>Small + Transparent</>}

          {type === "transparent" && size === "large" && <>Large + Transparent</>}
        </div>
      )}
    </div>
  );
};

ControlsButtons.propTypes = {
  mode: PropTypes.oneOf(["light"]),
  size: PropTypes.oneOf(["block", "large", "small"]),
  type: PropTypes.oneOf(["primary", "outline", "secondary", "transparent"]),
  state: PropTypes.oneOf(["disabled", "pressed", "default"]),
  icon: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["side", "none", "right", "left"]),
  textPosition: PropTypes.oneOf(["center", "left"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
