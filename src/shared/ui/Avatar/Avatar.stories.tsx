import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MockAvatar from "@/shared/assets/mocks/avatar.jpg";
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
  src: MockAvatar,
};

export const WithSize = Template.bind({});
WithSize.args = {
  src: MockAvatar,
  size: 200,
};
