import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { NotificationItem } from "./NotificationItem";
import { Theme } from "@/shared/const/theme";

export default {
  title: "entities/Notification/NotificationItem",
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  item: {
    id: "1",
    title: "Уведомление 1",
    description: "Hello world 1",
  },
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  item: {
    id: "1",
    title: "Уведомление 1",
    description: "Hello world 1",
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithHrefProp = Template.bind({});
WithHrefProp.args = {
  item: {
    id: "1",
    title: "Уведомление 1",
    description: "Hello world 1",
    href: "http://localhost:3000",
  },
};
