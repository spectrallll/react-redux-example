import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ListBox } from "./ListBox";

export default {
  title: "shared/ListBox",
  component: ListBox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: "123",
  items: [
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "1234" },
    { content: "lorem ipsum", value: "1235" },
  ],
};

export const topLeft = Template.bind({});
topLeft.args = {
  value: "123",
  direction: "top left",
  items: [
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "123" },
  ],
};

export const topRight = Template.bind({});
topRight.args = {
  value: "123",
  direction: "top right",
  items: [
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "123" },
  ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  value: "123",
  direction: "bottom right",
  items: [
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "123" },
  ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  value: "123",
  direction: "bottom left",
  items: [
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "123" },
  ],
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  value: "123",
  items: [
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "123" },
    { content: "lorem ipsum", value: "123" },
  ],
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
