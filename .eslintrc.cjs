/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    indent: 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'spaced-comment': ['error', 'always'],
    'react/no-array-index-key': 'off',
    'svelte/html-self-closing': ['error']
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      rules: {
        indent: ['off']
      },
      extends: 'plugin:mdx/recommended',
      settings: { 'mdx/remark': true }
    },
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
};
