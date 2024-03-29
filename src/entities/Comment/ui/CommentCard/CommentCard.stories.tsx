import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentCard } from "./CommentCard";
import { Theme } from "@/shared/const/theme";

export default {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "Vasiliy",
    },
  },
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "Vasiliy",
    },
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const isLoading = Template.bind({});
isLoading.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "Vasiliy",
    },
  },
  isLoading: true,
};
