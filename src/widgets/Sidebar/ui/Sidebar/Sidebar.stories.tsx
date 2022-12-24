import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Sidebar } from "./Sidebar";

export default {
  title: "widget/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ user: { authData: {} } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];

export const SidebarNoAuth = Template.bind({});
SidebarNoAuth.args = {};
SidebarNoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
