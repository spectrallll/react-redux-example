import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { CurrencySelect } from "./CurrencySelect";

export default {
  title: "entities/Currency/CurrencySelect",
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Default = Template.bind({});
Default.args = {

};

export const Dark = Template.bind({});
Dark.args = {

};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
