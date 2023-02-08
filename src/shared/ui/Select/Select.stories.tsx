import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Select } from "./Select";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Укажите значение",
  options: [
    { value: "moscow", content: "Москва" },
    { value: "spb", content: "Санкт-Петербург" },
    { value: "vladimir", content: "Владимир" },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  label: "Укажите значение",
  options: [
    { value: "moscow", content: "Москва" },
    { value: "spb", content: "Санкт-Петербург" },
    { value: "vladimir", content: "Владимир" },
  ],
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
