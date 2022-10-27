import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

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

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: "Title lorem ipsum",
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: "lorem ipsum san lsa ipsum lorem",
};

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: "Title lorem ipsum",
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: "lorem ipsum san lsa ipsum lorem",
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
  theme: TextTheme.ERROR,
};
