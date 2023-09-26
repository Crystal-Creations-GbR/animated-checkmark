import type { Meta, StoryObj } from "@storybook/vue3";
import { AnimatedCheckmark } from "../src";

const meta: Meta<typeof AnimatedCheckmark> = {
  component: AnimatedCheckmark,
  argTypes: {
    color: {
      control: {
        type: "color",
        presetColors: [
          "primary",
          "secondary",
          "accent",
          "red",
          "green",
          "blue",
        ],
      },
    },
  },
  parameters: {
    chromatic: { pauseAnimationAtEnd: true },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Accent: Story = {
  args: {
    color: "accent",
  },
};

export const Red: Story = {
  args: {
    color: "red",
  },
};

export const Green: Story = {
  args: {
    color: "green",
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
  },
};
