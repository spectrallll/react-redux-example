import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import Avatar from "@/shared/assets/mocks/avatar.jpg";
import ProfilePage from "./ProfilePage";

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

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const ProfilePageDark = Template.bind({});

ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: "admin",
      age: 22,
      country: Country.Russia,
      lastname: "Palhosh",
      firstname: "Naro",
      currency: Currency.RUB,
      city: "Moscow",
      avatar: Avatar,
    },
    readonly: true,
  },
})];

export const ProfilePageLight = Template.bind({});
ProfilePageLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    form: {
      username: "admin",
      age: 22,
      country: Country.Russia,
      lastname: "Palhosh",
      firstname: "Naro",
      currency: Currency.RUB,
      city: "Moscow",
      avatar: Avatar,
    },
    readonly: true,
  },
})];
