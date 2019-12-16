module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['plugin:prettier/recommended', 'react-app'],
  plugins: ['prettier'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'linebreak-style': 0
  }

}
