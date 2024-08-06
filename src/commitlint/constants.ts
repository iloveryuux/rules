export const gitmojiObject = {
  feat: { emoji: '✨', description: 'A new feature', type: 'feat' },
  fix: { emoji: '🐛', description: 'A bug fix', type: 'fix' },
  docs: { emoji: '📝', description: 'Documentation changes', type: 'docs' },
  style: { emoji: '🎨', description: 'Code style changes', type: 'style' },
  refactor: { emoji: '🔨', description: 'Code refactoring', type: 'refactor' },
  perf: { emoji: '🚀', description: 'Performance improvements', type: 'perf' },
  test: { emoji: '✅', description: 'Adding tests', type: 'test' },
  build: { emoji: '📦', description: 'Build system changes', type: 'build' },
  ci: { emoji: '⚙️', description: 'Continuous Integration changes', type: 'ci' },
  chore: { emoji: '🧹', description: 'Routine tasks', type: 'chore' },
  revert: { emoji: '⏪', description: 'Reverting changes', type: 'revert' },
  workflow: {
    emoji: '🔄',
    description: 'Workflow improvements',
    type: 'workflow'
  },
  security: { emoji: '🔒', description: 'Security fixes', type: 'security' },
  deprecate: { emoji: '⚠️', description: 'Deprecating code', type: 'deprecate' },
  merge: { emoji: '🔀', description: 'Merging branches', type: 'merge' },
  i18n: { emoji: '🌍', description: 'Internationalization', type: 'i18n' },
  accessibility: {
    emoji: '♿',
    description: 'Accessibility improvements',
    type: 'accessibility'
  },
  config: { emoji: '🔧', description: 'Configuration changes', type: 'config' },
  hotfix: { emoji: '🔥', description: 'Hotfixes', type: 'hotfix' },
  data: { emoji: '💾', description: 'Data management', type: 'data' },
  audit: { emoji: '🔍', description: 'Auditing', type: 'audit' },
  experiment: {
    emoji: '🧪',
    description: 'Experimental features',
    type: 'experiment'
  },
  optimize: { emoji: '🔧', description: 'Optimizations', type: 'optimize' },
  init: { emoji: '🆕', description: 'Initial commit', type: 'init' },
  upgrade: {
    emoji: '⚡️',
    description: 'Upgrading dependencies',
    type: 'upgrade'
  },
  analytics: {
    emoji: '📈',
    description: 'Analytics and tracking',
    type: 'analytics'
  },
  move: { emoji: '🚚', description: 'Moving or renaming', type: 'move' },
  types: { emoji: '🏷️', description: 'Type changes', type: 'types' },
  remove: { emoji: '🗑️', description: 'Removing code', type: 'remove' },
  pin: { emoji: '📌', description: 'Pinning dependencies', type: 'pin' },
  release: {
    emoji: '🎉',
    description: 'Releasing new versions',
    type: 'release'
  },
  idea: { emoji: '💡', description: 'New ideas', type: 'idea' },
  lint: { emoji: '🚨', description: 'Linting', type: 'lint' },
  cleanup: { emoji: '🧼', description: 'Cleaning up code', type: 'cleanup' },
  plugin: {
    emoji: '🧩',
    description: 'Adding or updating plugins',
    type: 'plugin'
  },
  scaffold: { emoji: '🏗️', description: 'Scaffolding', type: 'scaffold' },
  tool: { emoji: '🛠️', description: 'Development tools', type: 'tool' },
  maintenance: {
    emoji: '🔧',
    description: 'Maintenance tasks',
    type: 'maintenance'
  }
}

export const gitmoji: string[] = Object.keys(gitmojiObject).map(key => {
  const { emoji, type } = gitmojiObject[key]
  return `${emoji} ${type}`
})