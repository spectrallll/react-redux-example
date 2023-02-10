module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react",
    "@typescript-eslint",
    "i18next",
    "path-checker-plugin",
  ],
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
      ignoreAttribute: ["data-testid", "to", "target",
        "align", "direction", "gap", "justify", "role"],
    }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-param-reassign": "off",
    "no-undef": "off",
    "max-len": "off",
    // "max-len": ["error", {
    //       ignoreComments: true,
    //       code: 120,
    //     }],
    "path-checker-plugin/path-checker": ["error", { alias: "@" }],
    "path-checker-plugin/public-api-import-lock": ["error", { alias: "@" }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [{
    files: ["**/src/**/*.test.{ts, tsx}"],
    rules: {
      "i18next/no-literal-string": "off",
    },
  },
  {
    files: ["**/src/**/*.stories.{jsx, tsx}", ".stories.tsx"],
    rules: {
      "max-len": "off",
      "path-checker-plugin/path-checker": "off",
      "react/jsx-props-no-spreading": "off",
      "i18next/no-literal-string": "off",
      "path-checker-plugin/public-api-import-lock": "off",
    },
  },
  ],
};
