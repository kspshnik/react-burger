module.exports = {
  env: {
    browser: true,
    node: false,
    jest: true,
    mongo: false,
    es6: true,
  },
  plugins: ['babel', 'prefer-arrow', 'promise', 'import', 'jsx-a11y'],
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/strict',
  ],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: 'true',
    },
  },
  ignorePatterns: ['*.cjs', 'src/reportWebVitals.ts', 'src/index.js'],
  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
          '_fetchOptions',
          '_cardEndpoint',
          '_cardLikeEndpoint',
          '_goREST',
          '_authOptions',
        ],
        enforceInMethodNames: true,
        allowAfterThis: true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-closing-bracket-location': ['error', 'after-props'],
    'class-methods-use-this': ['error', { exceptMethods: ['_goREST'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0],

    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false,
      },
    ],
  },
};
