module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],

  rules: {
    // override/add rules settings here, such as:
    //关闭组件强制驼峰命名规则
    'vue/multi-word-component-names': 'off'
  }
}
