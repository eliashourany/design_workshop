import { ViewsImagesRatio } from ".";

export default {
  title: "Components/ViewsImagesRatio",
  component: ViewsImagesRatio,
  argTypes: {
    ratio: {
      options: [
        "thirty-four",
        "twenty-three",
        "thirty-two",
        "nine-hundred-and-sixteen",
        "eleven",
        "one-hundred-and-sixty-nine",
        "forty-three",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    ratio: "thirty-four",
    className: {},
  },
};
