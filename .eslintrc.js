module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['plugin:prettier/recommended', 'react-app'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'linebreak-style': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['error', {
      'endOfLine': 'auto'
    }],
  }
}
