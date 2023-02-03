import { Story } from "@storybook/react";
import { Suspense } from "react";

export const SuspenseDecorator = (StoryComponent: Story) => (
  <Suspense fallback="">
    <StoryComponent />
  </Suspense>
);
