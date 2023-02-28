import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { NotificationButton } from "./NotificationButton";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

export default {
  title: "features/NotificationButton",
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
  <NotificationButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: "GET",
      status: 200,
      response: [
        {
          id: "1",
          title: "Уведомление 1",
          description: "Hello world",
        },
        {
          id: "2",
          title: "Уведомление 2",
          description: "Hello world 2",
        },
        {
          id: "1",
          title: "Уведомление 3",
          description: "Hello world 3",
        },
      ],
    },
  ],
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
PrimaryDark.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: "GET",
      status: 200,
      response: [
        {
          id: "1",
          title: "Уведомление 1",
          description: "Hello world",
        },
        {
          id: "2",
          title: "Уведомление 2",
          description: "Hello world 2",
        },
        {
          id: "1",
          title: "Уведомление 3",
          description: "Hello world 3",
        },
      ],
    },
  ],
};
