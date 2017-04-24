const gitLink = require('../')

test('main', () => {
  const samples1 = 'zcong1993/git-link'
  const samples2 = 'zcong1993'
  expect(gitLink(samples1)).toEqual([
    ['github', `git@github.com:zcong1993/git-link.git`],
    ['https', `https://github.com/zcong1993/git-link.git`],
    ['gh-pages', `https://zcong1993.github.io/git-link`],
    ['gitbook', `https://git.gitbook.com/zcong1993/git-link.git`]
  ])
  expect(() => gitLink(samples2)).toThrow('Invalidate link!')
})
