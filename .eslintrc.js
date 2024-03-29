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
    "plugin:react-hooks/recommended",
    "prettier",
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
    "path-checker-plugin",
    "unused-imports",
  ],
  rules: {
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".ts", ".jsx", ".tsx"],
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: [
          "data-testid",
          "to",
          "target",
          "align",
          "direction",
          "gap",
          "justify",
          "role",
        ],
      },
    ],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-param-reassign": "off",
    "no-undef": "off",
    "max-len": "off",
    "path-checker-plugin/upper-layer-import-dont": [
      "error",
      {
        alias: "@",
        ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
      },
    ],
    "path-checker-plugin/path-checker": ["error", { alias: "@" }],
    "path-checker-plugin/public-api-import-lock": [
      "error",
      {
        alias: "@",
        testFilesPatterns: [
          "**/*.test.*",
          "**/*.story.*",
          "**/StoreDecorator.tsx",
        ],
      },
    ],
    "react/jsx-max-props-per-line": ["error", { maximum: 4 }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.test.{ts, tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
    {
      files: ["**/src/**/*.stories.{jsx, tsx}", "AppImage.stories.tsx"],
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
