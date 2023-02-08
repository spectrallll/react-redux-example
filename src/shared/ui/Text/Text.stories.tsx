import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Text, TextSize, TextTheme } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title lorem ipsum",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "lorem ipsum san lsa ipsum lorem",
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: "Title lorem ipsum",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: "lorem ipsum san lsa ipsum lorem",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
  theme: TextTheme.ERROR,
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
  size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
  size: TextSize.L,
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
  size: TextSize.S,
};
