module.exports = {
  scripts: {
    'next': 'next',
    'rollup': 'rollup',
  },
  tasks: {
    build: {
      run: [
          ['next', ['build']],
          ['next', ['export'], { o: './docs'}],
          ['touch', ['./docs/.nojekyll']],
          ['rollup', { c: 'rollup.config.js' }],
      ]
    }
  },
  help: {
    '-- MAIN TASKS -- ': '',
    'start': 'Develop your project',
    'build': 'Build your project'
  }
}
