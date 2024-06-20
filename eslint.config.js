import antfu from '@antfu/eslint-config';

export default antfu(
  {
    typescript: true,
    vue: true,
  },
  {
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'antfu/top-level-function': 'off',
      'arrow-parens': ['error', 'as-needed'],
    },
  },
);
