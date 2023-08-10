import { BarsNavBarsLarge } from ".";

export default {
  title: "Components/BarsNavBarsLarge",
  component: BarsNavBarsLarge,
  argTypes: {
    mode: {
      options: ["light"],
      control: { type: "select" },
    },
    rightAction: {
      options: ["none", "icon", "button"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    mode: "light",
    rightAction: "none",
    caption: true,
    className: {},
    text: "Large Title",
    text1: "A caption",
  },
};
