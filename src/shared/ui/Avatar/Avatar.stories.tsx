import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
  title: "shared/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://tl.rulate.ru/i/translation/22/6/12054.jpg",
};

export const WithSize = Template.bind({});
WithSize.args = {
  src: "https://tl.rulate.ru/i/translation/22/6/12054.jpg",
  size: 200,
};
