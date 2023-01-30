import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleDetailsComments } from "./ArticleDetailsComments";

export default {
  title: "pages/ArticleDetailsPage/ArticleDetailsComments",
  component: ArticleDetailsComments,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
