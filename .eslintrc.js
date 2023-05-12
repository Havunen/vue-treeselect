module.exports = {
  root: true,
  extends: [ 'riophae/vue-v2' ],
  globals: {
    PKG_VERSION: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: null,
      webpack: {
        config: 'build/webpack-configs/base.js',
      },
    },
  },
  rules: {
    'import/no-named-as-default': 0,
    'unicorn/consistent-function-scoping': 0,
    'vue/attributes-order': 0,
    'vue/no-v-html': 0,
    'vue/require-name-property': 0,
    'vue/component-definition-name-casing': 0,
    'vue/no-static-inline-styles': 0,
    'unicorn/prefer-dom-node-append': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-warning-comments': 0,
    'no-undefined': 0,
    'prefer-destructuring': 0,
  },
}
