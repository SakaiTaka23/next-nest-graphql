module.exports = {
  extends: ['next/core-web-vitals', 'turbo', 'airbnb', 'airbnb-typescript', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
};
