import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ProfileCard } from "./ProfileCard";
import { Theme } from "@/shared/const/theme";

export default {
  title: "entities/Profile/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: "admin",
    age: 22,
    country: Country.Russia,
    lastname: "Palhosh",
    firstname: "Naro",
    currency: Currency.RUB,
    city: "Moscow",
    avatar: "",
  },
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  data: {
    username: "admin",
    age: 22,
    country: Country.Russia,
    lastname: "Palhosh",
    firstname: "Naro",
    currency: Currency.RUB,
    city: "Moscow",
    avatar: "",
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
  error: "true",
};
