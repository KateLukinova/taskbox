module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/preset-scss',
    'storybook-dark-mode'
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
};
