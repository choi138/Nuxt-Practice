import path from 'node:path';
import { fileURLToPath } from 'node:url';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import parser from 'vue-eslint-parser';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ),
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      vue,
      prettier,
      import: importPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    ignores: ['node_modules', 'dist', 'vendor', '**/*.d.ts'],
    rules: {
      'import/extensions': 'off',
      'import/no-unresolved': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'vue/multi-word-component-names': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-console': 'off',
      'no-debug': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'global-require': 'off',
    },
  },
];
