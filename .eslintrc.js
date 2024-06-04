module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/style-prop-object': 'off',
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-indent': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    '@next/next/no-img-element': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'warn',
    indent: 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'operator-linebreak': 'off',
    'react/jsx-wrap-multilines': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      }, // this loads <rootdir>/tsconfig.json to eslintjsx
    },
  },
};
