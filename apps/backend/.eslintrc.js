module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  extends: ['custom-backend'],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['.eslintrc.js'],
};
