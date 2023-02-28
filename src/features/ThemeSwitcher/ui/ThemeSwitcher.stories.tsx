import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "@/shared/const/theme";

export default {
  title: "widget/ThemeSwitcher",
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const SwitcherDark = Template.bind({});
SwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SwitcherLight = Template.bind({});
SwitcherLight.decorators = [ThemeDecorator(Theme.LIGHT)];
