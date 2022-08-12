module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-underscore-dangle': 0,
    camelcase: 0,
    '@typescript-eslint/interface-name-prefix': 'true',
    '@typescript-eslint/explicit-function-return-type': 'true',
    '@typescript-eslint/explicit-module-boundary-types': 'true',
    '@typescript-eslint/no-explicit-any': 'true',
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
