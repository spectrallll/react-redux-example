module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
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
  },
  globals: {
    __IS_DEV__: true,
  },
};
