import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { NotFoundPage } from "./NotFoundPage";

export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];
