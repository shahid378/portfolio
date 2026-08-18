module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    // propTypes are deprecated and ignored as of React 19; this project
    // relies on plain JSX without runtime prop validation.
    'react/prop-types': 'off',
  },
  overrides: [
    {
      // react-three-fiber renders three.js objects, whose props are not DOM
      // attributes, so the DOM-oriented rule reports false positives here.
      files: ['src/portfolios/v2/components/HeroScene.jsx'],
      rules: { 'react/no-unknown-property': 'off' },
    },
  ],
}
