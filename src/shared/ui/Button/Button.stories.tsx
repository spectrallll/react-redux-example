import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonSize, ButtonTheme } from "./Button";

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
  theme: ButtonTheme.PRIMARY,
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Clear",
  theme: ButtonTheme.CLEAR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Send",
  theme: ButtonTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: "Clear",
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedLight = Template.bind({});
OutlinedLight.args = {
  children: "Outlined",
  theme: ButtonTheme.OUTLINE,
};
OutlinedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: "Outlined",
  theme: ButtonTheme.OUTLINE,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedSizeM = Template.bind({});
OutlinedSizeM.args = {
  children: "Outlined",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M,
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
  children: "Outlined",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
  children: "Outlined",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: "Background",
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundThemeDark = Template.bind({});
BackgroundThemeDark.args = {
  children: "Background",
  theme: ButtonTheme.BACKGROUND,
};
BackgroundThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: "Square",
  square: true,
  theme: ButtonTheme.BACKGROUND,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: "M",
  square: true,
  theme: ButtonTheme.BACKGROUND,
  size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: "L",
  square: true,
  theme: ButtonTheme.BACKGROUND,
  size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: "XL",
  square: true,
  theme: ButtonTheme.BACKGROUND,
  size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Disabled",
  theme: ButtonTheme.OUTLINE,
};
