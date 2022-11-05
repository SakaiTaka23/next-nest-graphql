module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'base'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
  },
};
