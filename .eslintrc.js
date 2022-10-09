module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
  ],
  rules: {
    "react/jsx-indent": [2, 2],
    indent: [2, 2],
    "react/jsx-filename-extension": [2, { extensions: [".ts", ".jsx", ".tsx"] }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent-props": [2, 2],
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "warn",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": ["error", { markupOnly: true }],
    "max-len": ["error", { ignoreComments: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
