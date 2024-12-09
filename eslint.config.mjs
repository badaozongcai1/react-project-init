import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsonParser from "jsonc-eslint-parser";

export default [
  {
    ignores: [
      "src/utils",
      "node_modules/*",
      "config/",
      "tests/",
      "jest.config.js",
      "webpack.config.js",
      "postcss.config.js",
      "cypress.config.js",
      "cypress.config.ts",

      // 构建产物
      "dist/",
      "doc/",

      // 缓存目录
      "**/.cache/**",
      "**/.temp/**",

      // IDE 配置
      "**/.vscode/**",
      "**/.idea/**",

      // Git 目录
      "**/.git/**",

      // 编译产物
      "**/*.min.js",
      "**/*.d.ts",

      // 环境配置文件
      "**/.env*",

      // 包管理器锁文件
      "**/package-lock.json",
      "**/yarn.lock",
      "**/pnpm-lock.yaml",
    ],
  },
  // JSON 文件的配置
  {
    files: ["**/*.json", "**/*.jsonc"],
    languageOptions: {
      parser: jsonParser,
    },
    rules: {
      "json/invalid": "error", // JSON 语法错误检查
      "json/undefined": "error", // 未定义的属性检查
      "json/enum": "error", // 枚举值检查
      "json/unexpected-end-of-comment": "error", // 注释结束符检查
      "json/unexpected-end-of-string": "error", // 字符串结束符检查
      "json/unexpected-end-of-number": "error", // 数字格式检查
      "json/comma-style": ["error", "last"], // 逗号样式
      "json/comma-dangle": ["error", "never"], // 禁止末尾逗号
      "json/indent": ["error", 2], // 缩进设置
      "json/quote-props": ["error", "always"], // 属性名必须使用引号
      "json/quotes": ["error", "double"], // 使用双引号
      "json/space-unary-ops": "error", // 一元运算符周围的空格
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // TypeScript 规则
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",

      // React 规则
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-props-no-spreading": "warn",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-key": "error",
      "react/jsx-no-undef": "error",
      "react/no-unknown-property": "error",
      "react/no-unused-prop-types": "warn",

      // React Hooks 规则
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // ES6+ 规则
      "no-var": "error",
      "prefer-arrow-callback": "warn",
      "arrow-body-style": ["warn", "as-needed"],

      // 代码风格
      indent: ["error", 2],
      quotes: ["error", "double"],
      "jsx-quotes": ["error", "prefer-double"],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],

      // 最佳实践
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "no-unused-vars": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["off"],
      "max-len": [
        "warn",
        {
          code: 100,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
    },
  },
  {
    // 对测试文件的特殊配置
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
    rules: {
      "max-len": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off",
    },
  },
];
