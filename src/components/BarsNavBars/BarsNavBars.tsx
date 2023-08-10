/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { Settings2 } from "../../icons/Settings2";
import { ControlsButtons } from "../ControlsButtons";
import "./style.css";

interface Props {
  leftAction: "text" | "icon";
  leftActionWithTitle: boolean;
  rightAction: "text" | "icon" | "button";
  className: any;
  divClassName: any;
  text: string;
  settings2StyleOverrideClassName: any;
}

export const BarsNavBars = ({
  leftAction,
  leftActionWithTitle,
  rightAction,
  className,
  divClassName,
  text = "Title",
  settings2StyleOverrideClassName,
}: Props): JSX.Element => {
  return (
    <div className={`bars-nav-bars ${className}`}>
      {(rightAction === "icon" ||
        (leftActionWithTitle && rightAction === "text") ||
        (leftAction === "text" && rightAction === "text")) && (
        <div
          className={`title ${
            rightAction === "icon" || (leftAction === "text" && rightAction === "text") ? divClassName : undefined
          }`}
        >
          {text}
        </div>
      )}

      {["button", "text"].includes(rightAction) && (
        <div className={`right-actionable ${rightAction} ${leftAction} left-action-with-title-${leftActionWithTitle}`}>
          {rightAction === "text" && (leftActionWithTitle || leftAction === "text") && <>Action</>}

          {(rightAction === "button" || (!leftActionWithTitle && leftAction === "icon" && rightAction === "text")) && (
            <>{text}</>
          )}
        </div>
      )}

      {rightAction === "button" && (leftActionWithTitle || leftAction === "text") && (
        <ControlsButtons
          className="controls-buttons-instance"
          icon={false}
          iconPosition="none"
          mode="light"
          size="small"
          state="default"
          text1="Action"
          textPosition="center"
          type="primary"
        />
      )}

      {(leftActionWithTitle || leftAction === "text") && (
        <div className={`left-actionable left-action-with-title-0-${leftActionWithTitle}`}>
          {leftActionWithTitle && (
            <>
              <ChevronLeft className="chevron-left" />
              <div className="text-wrapper">Settings</div>
            </>
          )}

          {!leftActionWithTitle && <>Action</>}
        </div>
      )}

      {!leftActionWithTitle && rightAction === "text" && leftAction === "icon" && <div className="div">Action</div>}

      {!leftActionWithTitle && leftAction === "icon" && <ChevronLeft className="chevron-left-1" />}

      {rightAction === "icon" && <Settings2 className={settings2StyleOverrideClassName} />}

      {rightAction === "button" && !leftActionWithTitle && leftAction === "icon" && (
        <ControlsButtons
          className="controls-buttons-instance"
          icon={false}
          iconPosition="none"
          mode="light"
          size="small"
          state="default"
          text1="Action"
          textPosition="center"
          type="primary"
        />
      )}
    </div>
  );
};

BarsNavBars.propTypes = {
  leftAction: PropTypes.oneOf(["text", "icon"]),
  leftActionWithTitle: PropTypes.bool,
  rightAction: PropTypes.oneOf(["text", "icon", "button"]),
  text: PropTypes.string,
};
