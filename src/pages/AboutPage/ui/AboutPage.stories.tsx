import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import AboutPage from "./AboutPage";

export default {
  title: "pages/AboutPage",
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};
AboutPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];
