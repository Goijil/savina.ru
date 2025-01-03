// import js from "@eslint/js";
// import globals from "globals";
// import react from "eslint-plugin-react";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";

// export default [
//   { ignores: ["dist"] },
//   {
//     files: ["**/*.{js,jsx}"],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: "latest",
//         ecmaFeatures: { jsx: true },
//         sourceType: "module",
//       },
//     },
//     settings: { react: { version: "18.3" } },
//     plugins: {
//       react,
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//     },
//     rules: {
//       ...js.configs.recommended.rules,
//       ...react.configs.recommended.rules,
//       ...react.configs["jsx-runtime"].rules,
//       ...reactHooks.configs.recommended.rules,
//       "react/jsx-no-target-blank": "off",
//       "react-refresh/only-export-components": [
//         "warn",
//         { allowConstantExport: true },
//       ],
//       // "no-undef": "off",
//       // "no-unused-vars": "off",
//       // "spellcheck/spell-checker": "off", // Отключение правил, связанных с орфографией
//     },
//   },
// ];

// // // Отключение правил, связанных с орфографией и использованием переменных
// // "no-undef": "off", // Отключает проверку на использование неопределенных переменных
// // "no-unused-vars": "off", // Отключает проверку на наличие неиспользуемых переменных
// // "spellcheck/spell-checker": "off", // Отключает проверку орфографии, если установлен соответствующий плагин
