import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "shared/ui/Input/Input";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Type text",
  value: "123123",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  value: "123",
  placeholder: "Type...",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
