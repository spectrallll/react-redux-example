import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentList } from "./CommentList";
import { Theme } from "@/shared/const/theme";

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [{
    text: "hello",
    id: "1",
    user: {
      id: "1", username: "World",
    },
  }],
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  comments: [{
    text: "world",
    id: "1",
    user: {
      id: "1", username: "Hello",
    },
  }],
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
  comments: [{
    text: "world",
    id: "1",
    user: {
      id: "1", username: "Hello",
    },
  }],
  isLoading: true,
};
