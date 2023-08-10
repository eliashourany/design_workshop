import { ImageListsImage } from ".";

export default {
  title: "Components/ImageListsImage",
  component: ImageListsImage,
  argTypes: {
    type: {
      options: ["category", "store", "food"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "category",
    viewsImagesRatioRatioClassName: {},
    text: "Asian",
  },
};
