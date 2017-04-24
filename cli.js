#!/usr/bin/env node
const yargs = require('yargs')
const update = require('update-notifier')
const chalk = require('chalk')
const table = require('text-table')

const pkg = require('./package.json')
const run = require('./')

update({ pkg }).notify()

const cli = yargs
  .usage('Usage: $0 <short link>')
  .version(pkg.version)
  .alias('v', 'version')
  .alias('h', 'help')
  .help()

const shortLink = cli.argv._[0]

if (!shortLink) {
  console.log(`\n ${chalk.gray.bgRed.bold('error')} Source file is required! \n`)
  cli.showHelp()
  process.exit(1)
}

let res
try {
  res = run(shortLink)
  console.log(`\n${chalk.gray.bgGreen.bold('success')} Done!\n`)
  console.log(table(res))
} catch (err) {
  console.log(`\n ${chalk.gray.bgRed.bold('error')} ${err.message}`)
}

