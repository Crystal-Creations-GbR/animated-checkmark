import type { Preview } from "@storybook/vue3";

import { setup } from "@storybook/vue3";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import options from "../vuetify-options";
import { withVuetifyTheme, DEFAULT_THEME } from "./withVuetifyTheme.decorator";

setup((app) => {
  app.use(createVuetify({ ...options, components }));
});

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", title: "Light", icon: "circlehollow" },
        { value: "dark", title: "Dark", icon: "circle" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [withVuetifyTheme];
