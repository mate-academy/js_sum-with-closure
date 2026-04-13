import eslintPluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        jest: true,
      },
    },
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      "no-proto": "off",
    },
  },
];
