import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import AboutPage from "./AboutPage";
import { Theme } from "@/shared/const/theme";

export default {
  title: "pages/ForbiddenPage",
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const AdminPageDark = Template.bind({});
AdminPageDark.args = {};
AdminPageDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AdminPageDarkLight = Template.bind({});
AdminPageDarkLight.args = {};
AdminPageDarkLight.decorators = [ThemeDecorator(Theme.LIGHT)];
