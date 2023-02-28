import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import ProfilePage from "./ProfilePage";
import { Theme } from "@/shared/const/theme";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const ProfilePageDark = Template.bind({});

ProfilePageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: "admin",
        age: 22,
        country: Country.Russia,
        lastname: "Palhosh",
        firstname: "Naro",
        currency: Currency.RUB,
        city: "Moscow",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png",
      },
      readonly: true,
    },
  }),
];

export const ProfilePageLight = Template.bind({});
ProfilePageLight.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    profile: {
      form: {
        username: "admin",
        age: 22,
        country: Country.Russia,
        lastname: "Palhosh",
        firstname: "Naro",
        currency: Currency.RUB,
        city: "Moscow",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png",
      },
      readonly: true,
    },
  }),
];
