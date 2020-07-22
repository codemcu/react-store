module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: '16.13.1',
    },
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'no-console': 'error',
    'no-var': 'error',
    'no-prototype-builtins': 0,
    'no-useless-escape': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
