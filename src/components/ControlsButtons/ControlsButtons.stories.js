import { ControlsButtons } from ".";

export default {
  title: "Components/ControlsButtons",
  component: ControlsButtons,
  argTypes: {
    mode: {
      options: ["light"],
      control: { type: "select" },
    },
    size: {
      options: ["block", "large", "small"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "outline", "secondary", "transparent"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "pressed", "default"],
      control: { type: "select" },
    },
    iconPosition: {
      options: ["side", "none", "right", "left"],
      control: { type: "select" },
    },
    textPosition: {
      options: ["center", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    mode: "light",
    size: "block",
    type: "primary",
    state: "disabled",
    icon: true,
    iconPosition: "side",
    textPosition: "center",
    className: {},
    textClassName: {},
    text: "Block + Primary",
    text1: "Small + Primary",
  },
};
