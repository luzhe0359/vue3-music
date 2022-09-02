module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature', // 新增功能
        'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
        'fix', // 修补 bug
        'ui', // 更新 UI
        'docs', // 更新文档
        'style', // 样式更改
        'perf', // 性能优化
        'refactor', // 重构
        'test', // 增加测试
        'chore', // 杂项、其他更改
        'ci', // 更新 CI/CD 等自动化配置
        'revert', // 代码回滚
        'merge', // 合并分支
        'release', // 发布
        'deploy', // 部署
        'build' // 打包
      ]
    ],
    // <type> 格式 小写
    'type-case': [2, 'always', 'lower-case'],
    // <type> 不能为空
    'type-empty': [2, 'never'],
    // <scope> 范围不能为空
    'scope-empty': [2, 'never'],
    // <scope> 范围格式
    'scope-case': [0],
    // <subject> 主要 message 不能为空
    'subject-empty': [2, 'never'],
    // <subject> 以什么为结束标志，禁用
    'subject-full-stop': [0, 'never'],
    // <subject> 格式，禁用
    'subject-case': [0, 'never'],
    // <body> 以空行开头
    'body-leading-blank': [1, 'always'],
    'header-max-length': [0, 'always', 72]
  }
}
/**
 * 代码提交规范 - 统一风格提交 (需要用到的包及作用)
 * commitizen cz-conventional-changelog
 *  - 系统会提示您在提交时填写所有必需的提交字段
 * cz-customizable
 *  - 汉化以上插件
 * @commitlint/config-conventional @commitlint/cli
 *  - 限制提交格式
 */
