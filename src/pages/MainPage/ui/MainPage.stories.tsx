import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import MainPage from "./MainPage";
import { Theme } from "@/shared/const/theme";

export default {
  title: "pages/MainPage",
  component: MainPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const MainPageDark = Template.bind({});
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MainPageLight = Template.bind({});
MainPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];
