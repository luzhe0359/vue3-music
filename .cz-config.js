module.exports = {
  types: [
    { value: 'feature', name: 'feature: 新增功能' },
    { value: 'bug', name: 'bug: 测试反馈bug列表中的bug号' },
    { value: 'fix', name: 'fix: 修复 bug' },
    { value: 'ui', name: 'ui: 更新 UI' },
    { value: 'docs', name: 'docs: 更新文档' },
    { value: 'style', name: 'style: 样式更改' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'refactor', name: 'refactor: 重构(既不是增加feature，也不是修复bug)' },
    { value: 'test', name: 'test: 增加测试' },
    { value: 'chore', name: 'chore: 杂项、其他更改' },
    { value: 'ci', name: 'ci: 更新 CI/CD 等自动化配置' },
    { value: 'revert', name: 'revert: 回退' },
    { value: 'merge', name: 'merge: 合并分支' },
    { value: 'release', name: 'release: 发布' },
    { value: 'deploy', name: 'deploy: 部署' },
    { value: 'build', name: 'build: 打包' }
  ],
  scopes: [''],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    scope: '请输入您修改的范围(可选):',
    subject: '请简要描述提交 message (必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  allowCustomScopes: true,
  // skipEmptyScopes: true,
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72
}
