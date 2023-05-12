/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
const config = {
  extends: [
    'upleveled',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:playwright/recommended',
  ],
  plugins: ['jest', 'playwright'],
  env: {
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};

module.exports = config;
