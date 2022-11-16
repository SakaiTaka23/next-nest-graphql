module.exports = {
  root: true,
  extends: ['custom-frontend'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['.eslintrc.js', 'next.config.js'],
};
