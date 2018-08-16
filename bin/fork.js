#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const boxen = require('boxen')
const update = require('npm-update')
const pkg = require('../package.json')

const dest = process.argv.slice(2)[0]
const usage = message => {
  console.log(`
  Usage:
  $ webpack-seed-project [path]
  ${message ? `Note: ${chalk.cyan(message)}` : ''}
`)
  process.exit(0)
}

if (!dest) usage()
if (!fs.existsSync(dest)) usage(`${dest} must exist.`)
if (fs.readdirSync(dest).length) usage(`${dest} must be an empty directory.`)

const srcDir = path.resolve(__dirname, '..')
const templates = [
  'src',
  'static',
  '.babelrc',
  '.browserslistrc',
  '.eslintignore',
  '.eslintrc.js',
  '.postcssrc.js',
  '.stylelintrc.js',
  'index.html',
  'webpack.config.js',
]

const createPackageJson = () => {
  const srcPackage = require(path.join(srcDir, 'package.json'))
  const destPackage = Object.assign(srcPackage, {
    private: true,
    repository: {
      type: 'git',
      url: 'git@github.com:{group}/{repo}.git',
    },
    name: `seed-projcet-${path.basename(dest)}`,
    description: '',
    dependencies: {},
  })
  delete destPackage.bin
  delete destPackage.scripts.fork
  fs.writeFileSync(path.join(dest, 'package.json'), JSON.stringify(destPackage, null, 2), 'utf8')
}

const createIgnore = () => {
  fs.copyFileSync(path.join(srcDir, 'gitignore'), path.join(dest, '.gitignore'))
}

const forkTemplate = src => {
  const stat = fs.statSync(path.join(srcDir, src))
  if (stat.isFile()) {
    fs.copyFileSync(path.join(srcDir, src), path.join(dest, src))
  }
  if (stat.isDirectory()) {
    const destDir = path.join(dest, src)
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir)
    const children = fs.readdirSync(path.join(srcDir, src))
    for (const child of children) {
      forkTemplate(path.join(src, child))
    }
  }
}

const postFork = () => console.log(boxen(
  `new project created at ${chalk.cyan.underline(dest)}
$ cd ${dest}
$ npm i
$ npm run dev`, {
    padding: 1,
    borderStyle: 'round',
    borderColor: 'cyan',
  }))

function init () {
  for (const template of templates) {
    forkTemplate(template)
    console.log(`create ${chalk.cyan(template)}`)
  }
  createPackageJson()
  createIgnore()
  postFork()
}

(async () => {
  const { needUpdate } = await update({
    pkg,
    host: 'registry.cnpmjs.org', // registry.npmjs.org
  })
  if (needUpdate) return
  init()
})()
