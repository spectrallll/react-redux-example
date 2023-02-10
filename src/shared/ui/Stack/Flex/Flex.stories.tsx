import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
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
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
  gap: "4",
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
  gap: "8",
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
  gap: "16",
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
  gap: "32",
};

export const Column = Template.bind({});
Column.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
  direction: "column",
  align: "start",
};

export const ColumnCenter = Template.bind({});
ColumnCenter.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
  direction: "column",
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
  direction: "column",
  align: "start",
};
