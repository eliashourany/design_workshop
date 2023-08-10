import { BarsNavBars } from ".";

export default {
  title: "Components/BarsNavBars",
  component: BarsNavBars,
  argTypes: {
    leftAction: {
      options: ["text", "icon"],
      control: { type: "select" },
    },
    rightAction: {
      options: ["text", "icon", "button"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    leftAction: "text",
    leftActionWithTitle: true,
    rightAction: "text",
    className: {},
    divClassName: {},
    text: "Title",
    settings2StyleOverrideClassName: {},
  },
};
