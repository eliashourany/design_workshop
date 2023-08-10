import { ControlsCheckboxes } from ".";

export default {
  title: "Components/ControlsCheckboxes",
  component: ControlsCheckboxes,
  argTypes: {
    mode: {
      options: ["light"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "pressed", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    mode: "light",
    selected: true,
    state: "disabled",
    className: {},
    icon5StyleOverrideClassName: {},
  },
};
