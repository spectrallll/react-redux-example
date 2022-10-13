import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Loader } from "./Loader";

export default {
  title: "shared/Loader",
  component: Loader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderDark = Template.bind({});
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoaderLight = Template.bind({});
LoaderLight.decorators = [ThemeDecorator(Theme.LIGHT)];
