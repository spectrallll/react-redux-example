import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

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

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const SwitcherDark = Template.bind({});
SwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SwitcherLight = Template.bind({});
SwitcherLight.decorators = [ThemeDecorator(Theme.LIGHT)];
