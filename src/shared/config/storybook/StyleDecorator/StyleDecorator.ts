// eslint-disable-next-line path-checker-plugin/upper-layer-import-dont
import "@/app/styles/index.scss";
import { Story } from "@storybook/react";

export const StyleDecorator = (story: () => Story) => story();
