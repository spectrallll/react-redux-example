import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ForbiddenPage from "./ForbiddenPage";

export default {
  title: "pages/ForbiddenPage",
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />;

export const ForbiddenPageDark = Template.bind({});
ForbiddenPageDark.args = {};
ForbiddenPageDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ForbiddenPageDarkLight = Template.bind({});
ForbiddenPageDarkLight.args = {};
ForbiddenPageDarkLight.decorators = [ThemeDecorator(Theme.LIGHT)];