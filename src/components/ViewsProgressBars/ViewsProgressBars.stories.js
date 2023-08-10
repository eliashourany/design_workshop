import { ViewsProgressBars } from ".";

export default {
  title: "Components/ViewsProgressBars",
  component: ViewsProgressBars,
  argTypes: {
    fill: {
      options: ["sixty", "thirty", "eighty", "twenty", "one-hundred", "fifty", "ten", "forty", "ninety", "seventy"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    fill: "sixty",
    className: {},
    indicatorClassName: {},
  },
};
