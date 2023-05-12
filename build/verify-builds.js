const fs = require('node:fs')
const path = require('node:path')
const { shallowEqualArrays } = require('shallow-equal')
const config = require('./config')

const expectedDistFiles = [
  'vue-treeselect.cjs.js',
  'vue-treeselect.cjs.js.map',
  'vue-treeselect.umd.js',
  'vue-treeselect.umd.js.map',
  'vue-treeselect.esm.js',
  'vue-treeselect.esm.js.map',
  'vue-treeselect.css',
  'vue-treeselect.css.map',
  'vue-treeselect.cjs.min.js',
  'vue-treeselect.cjs.min.js.map',
  'vue-treeselect.umd.min.js',
  'vue-treeselect.umd.min.js.map',
  'vue-treeselect.esm.min.js',
  'vue-treeselect.esm.min.js.map',
  'vue-treeselect.min.css',
  'vue-treeselect.min.css.map',
]
const actualFiles = fs.readdirSync(config.library.assetsRoot).filter(x => !x.endsWith('.png'))

if (!shallowEqualArrays(expectedDistFiles.sort(), actualFiles.sort())) {
  throw new Error('Built files are not as expected.')
}

function readFile(fileName) {
  return fs.readFileSync(path.join(config.library.assetsRoot, fileName))
}

function shouldReplaceEnvOrNot(fileName, expected) {
  const source = readFile(fileName)
  const actual = !source.includes('process.env.NODE_ENV')

  if (expected !== actual) {
    throw new Error(`${fileName} was not built correctly.`)
  }
}
shouldReplaceEnvOrNot('vue-treeselect.esm.js', true)
shouldReplaceEnvOrNot('vue-treeselect.esm.min.js', true)
shouldReplaceEnvOrNot('vue-treeselect.umd.js', true)
shouldReplaceEnvOrNot('vue-treeselect.umd.min.js', true)
shouldReplaceEnvOrNot('vue-treeselect.cjs.js', false)
shouldReplaceEnvOrNot('vue-treeselect.cjs.min.js', true)

function shouldReplaceCssEasings(fileName) {
  const source = readFile(fileName)

  if (!source.includes('cubic-bezier(')) {
    throw new Error(`${fileName} was not built correctly.`)
  }
}
shouldReplaceCssEasings('vue-treeselect.css')
shouldReplaceCssEasings('vue-treeselect.min.css')
