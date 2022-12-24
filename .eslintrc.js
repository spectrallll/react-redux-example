module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "react/jsx-indent": [2, 2],
    indent: [2, 2],
    "react/jsx-filename-extension": [2, {
      extensions: [".ts", ".jsx", ".tsx"],
    }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent-props": [2, 2],
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": ["error", {
      markupOnly: true,
      ignoreAttribute: ["data-testid", "to"],
    }],
    "max-len": ["error", {
      ignoreComments: true,
      code: 120,
    }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-param-reassign": "off",
    "no-undef": "off",
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
  overrides: [{
    files: ["**/src/**/*.test.{ts, tsx}"],
    rules: {
      "i18next/no-literal-string": "off",
    },
  },
  {
    files: ["*.stories.tsx"],
    rules: {
      "react/jsx-props-no-spreading": "off",
    },
  },
  ],
};
