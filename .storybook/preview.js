import '../src/index.css';
import { themes } from '@storybook/theming';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#725FA2' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
    stylePreview: true
  }
};
