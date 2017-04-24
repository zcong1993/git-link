module.exports = short => {
  const matches = short.match(/(\w+[-]?\w+)\/(\w+[-]?\w+)/)
  if (!matches) {
    throw new Error('Invalidate link!')
  }
  const user = matches[1]
  const repo = matches[2]
  if (user && repo) {
    return [
      ['github', `git@github.com:${user}/${repo}.git`],
      ['https', `https://github.com/${user}/${repo}.git`],
      ['gh-pages', `https://${user}.github.io/${repo}`],
      ['gitbook', `https://git.gitbook.com/${user}/${repo}.git`]
    ]
  }
}
