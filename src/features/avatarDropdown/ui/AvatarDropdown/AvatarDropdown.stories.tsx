import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AvatarDropdown } from "./AvatarDropdown";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { UserRole } from "@/entities/User";
import MockAvatar from "@/shared/assets/mocks/avatar.jpg";
import { Theme } from "@/shared/const/theme";

export default {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [(story) => <div style={{ width: "200px" }}>{story()}</div>],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    user: {
      authData: {
        username: "spectrall",
        avatar: MockAvatar,
        roles: [UserRole.USER],
      },
    },
  }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {
        username: "spectrall",
        avatar: MockAvatar,
        roles: [UserRole.USER],
      },
    },
  }),
];

export const WithAdmin = Template.bind({});
WithAdmin.args = {};
WithAdmin.decorators = [
  StoreDecorator({
    user: {
      authData: {
        username: "spectrall",
        avatar: MockAvatar,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
      },
    },
  }),
];
