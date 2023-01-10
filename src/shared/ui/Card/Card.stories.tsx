import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text } from "shared/ui/Text/Text";
import { Card } from "./Card";

export default {
  title: "shared/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Text
    title="TEXT"
    text="hello world world world world"
  />,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: <Text
    text="hello world other lorem"
    title="Lorem ipsum"
  />,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
