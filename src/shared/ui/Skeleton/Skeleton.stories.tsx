import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Skeleton } from "./Skeleton";
import { Theme } from "@/shared/const/theme";

export default {
  title: "shared/Skeleton",
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: "100%",
  height: 200,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  width: "100%",
  height: 200,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});
Circle.args = {
  border: "50%",
  width: 100,
  height: 100,
};

export const PrimaryPurple = Template.bind({});
PrimaryPurple.args = {
  width: "100%",
  height: 200,
};
PrimaryPurple.decorators = [ThemeDecorator(Theme.PURPLE)];
