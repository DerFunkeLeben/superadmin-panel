const prettierOptions = require('./.prettierrc.js');
const extensions = ['.tsx', '.jsx', '.ts', '.js', '.json'];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier', '@fudgi-packages/simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions,
        map: [['@', 'src']],
      },
    },
  },
  env: {
    node: true,
    browser: true,
    jasmine: true,
    jest: true,
    es2021: true,
  },
  rules: {
    'no-debugger': ['warn'],
    'prettier/prettier': ['warn', prettierOptions],
    'max-len': ['warn', { code: 140 }],

    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    '@fudgi-packages/simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react.*', '^(?!@\\/)[a-zA-Z@].*$'],
          [
            '^(@/app|@/components|@/context|@/hooks|@/pages|@/redux|@/resources)(\\/\\w+)*\\/[A-Z]\\w*$',
            '^.*\\/[A-Z,_]\\w*$',
            'form(?!Schema)',
            'hooks',
            '\\.api',
            '^(@/app|@/components|@/context|@/hooks|@/pages|@/redux|@/resources)(\\/\\w+)*\\/use[A-Z]\\w*$',
            '^\\.(\\/\\w+)*\\/use[A-Z]\\w*$',
            '^\\..(\\/\\w+)*\\/use[A-Z]\\w*$',
          ],
          [
            '^(@/app|@/components|@/hooks|@/pages|@/redux|@/utils)(\\/\\w+)*\\/(?!styles)(?!constants)(?!types)(?!hooks)[a-z]\\w*$',
            '^\\.(?!\\/types)(\\/\\w+)*\\/(?!styles)(?!constants)(?!types)(?!hooks)(?!form)[a-z]\\w*$',
            '^\\..(\\/\\w+)*\\/(?!styles)(?!constants)(?!types)(?!hooks)(?!form)[a-z]\\w*$',
            'formSchema',
            '\\.slice',
            '^(@/resources)(\\/\\w+)*\\/[a-z]\\w*$',
            'constants',
            'types',
            'style',
            '\\.css',
            '\\.svg',
          ],
          // 'utils',
          // 'storeInstance',
          // 'filterOperators',
          // 'redux/api',
          // 'userActions',
          // 'userGetters',
          // 'redux/baseQuery',
          // 'thunks',
          // 'formSchema',
          // 'routes',
          // 'data',
          // 'tableConfig',
          // 'tableData',
          // 'breadcrumbs',
          // 'navbar',
          // '(?<!Sub)(?<!event)Types',
        ],
      },
    ],

    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../../../*'],
            message: 'USE ALIAS!!!',
          },
        ],
      },
    ],
  },
  globals: {
    module: 'readonly',
    process: 'readonly',
    require: 'readonly',
  },
};
