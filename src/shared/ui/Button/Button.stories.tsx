import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Send",
  theme: ThemeButton.PRIMARY,
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Clear",
  theme: ThemeButton.CLEAR,
};

export const OutlinedLight = Template.bind({});
OutlinedLight.args = {
  children: "Outlined",
  theme: ThemeButton.OUTLINE,
};
OutlinedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: "Outlined",
  theme: ThemeButton.OUTLINE,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
