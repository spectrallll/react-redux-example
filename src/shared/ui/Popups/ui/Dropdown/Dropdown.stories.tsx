import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Button } from "../../../Button/Button";
import { Dropdown } from "./Dropdown";
import { Theme } from "@/shared/const/theme";

export default {
  title: "shared/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  trigger: <Button>123</Button>,
  items: [
    {
      content: "first",
    },
    {
      content: "second",
    },
    {
      content: "third",
    },
  ],
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  trigger: <Button>123</Button>,
  items: [
    {
      content: "first",
    },
    {
      content: "second",
    },
    {
      content: "third",
    },
  ],
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
