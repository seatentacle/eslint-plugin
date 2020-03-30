module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    env: {
      browser: true,
      node: true,
      jest: true,
    },
    globals: {
      shallow: 'readonly',
      mount: 'readonly',
      render: 'readonly',
    },
    plugins: [
      '@seatentacle',
      'import',
      'promise',
      'react',
      'react-hooks',
    ],
    extends: [
      'eslint:recommended',
    ],
    rules: {
      'no-await-in-loop': 'error',
      'no-console': ['error', {
        allow: ['error'],
      }],
      'no-extra-parens': ['error', 'all', {
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJsx: 'multiline',
      }],
      'no-template-curly-in-string': 'error',
      'no-useless-backreference': 'error',
      'require-atomic-updates': 'error',
    },
  },
};
