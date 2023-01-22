import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Flex } from "./Flex";

export default {
  title: "shared/Flex",
  component: Flex,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>three</div>
      <div>four</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>three</div>
      <div>four</div>
    </>
  ),
  gap: "4",
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>three</div>
      <div>four</div>
    </>
  ),
  gap: "8",
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>three</div>
      <div>four</div>
    </>
  ),
  gap: "16",
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>three</div>
      <div>four</div>
    </>
  ),
  gap: "32",
};

export const Column = Template.bind({});
Column.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>three</div>
      <div>four</div>
    </>
  ),
  direction: "column",
  align: "start",
};

export const ColumnCenter = Template.bind({});
ColumnCenter.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>three</div>
      <div>four</div>
    </>
  ),
  direction: "column",
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>three</div>
      <div>four</div>
    </>
  ),
  direction: "column",
  align: "start",
};
