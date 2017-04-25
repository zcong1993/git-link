const gitLink = require('../')

const samples1 = 'zcong1993/git-link'
const samples2 = 'zcong1993'

it(`should work well with ${samples1}`, () => {
  expect(gitLink(samples1)).toEqual([
    ['github', `git@github.com:zcong1993/git-link.git`],
    ['https', `https://github.com/zcong1993/git-link.git`],
    ['gh-pages', `https://zcong1993.github.io/git-link`],
    ['gitbook', `https://git.gitbook.com/zcong1993/git-link.git`]
  ])
})

it(`should throw error with ${samples2}`, () => {
  expect(() => gitLink(samples2)).toThrow('Invalidate link!')
})
