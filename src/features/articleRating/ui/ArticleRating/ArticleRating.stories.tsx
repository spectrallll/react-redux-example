import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import withMock from "storybook-addon-mock";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import ArticleRating from "./ArticleRating";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "features/ArticleRating/ArticleRating",
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  articleId: "1",
};
Primary.decorators = [StoreDecorator({
  user: {
    authData: {
      id: "1",
    },
  },
})];

Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId&1`,
      method: "GET",
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  articleId: "1",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      id: "1",
    },
  },
})];

PrimaryDark.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId&1`,
      method: "GET",
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
  articleId: "1",
};
WithoutRate.decorators = [StoreDecorator({
  user: {
    authData: {
      id: "1",
    },
  },
})];

WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId&1`,
      method: "GET",
      status: 200,
      response: [],
    },
  ],
};
