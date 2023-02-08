import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import AdminPanelPage from "./AdminPanelPage";

export default {
  title: "pages/ForbiddenPage",
  component: AdminPanelPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage {...args} />;

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};
AboutPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];
