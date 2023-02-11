import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Loader } from "./Loader";
import { Theme } from "@/shared/const/theme";

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
