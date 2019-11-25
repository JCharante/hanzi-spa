module.exports = {
  root: true,
  
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  
  env: {
    browser: true
  },
  
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  
  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true
  },
  
  // add your custom rules here
  rules: {
    'no-param-reassign': 'off',
    'indent': ['warn', 4],
    "vue/script-indent": ["error", 4, {
      "baseIndent": 1,
      "switchCase": 0,
      "ignores": []
    }],
    'max-len': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-unused-vars': 'off',
    'prefer-template': 'off',
    'semi': 'warn',
    'no-useless-return': 'off',
    'quotes': 'off',
    'no-else-return': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'warn',
    'no-unreachable': 'warn',
    'func-names': 'off',
    'no-trailing-spaces': 'off',
    'linebreak-style': 'off',
    'no-empty': 'off',
    'prefer-destructuring': 'off',
    
    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
};
