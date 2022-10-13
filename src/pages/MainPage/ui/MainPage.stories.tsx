import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import MainPage from "./MainPage";

export default {
  title: "pages/MainPage",
  component: MainPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const MainPageDark = Template.bind({});
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MainPageLight = Template.bind({});
MainPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];
