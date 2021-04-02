import {readFileSync} from 'fs';
import path from 'path';
import _ from 'lodash';

export function readFile(path1, path2) {
  const file1 = readFileSync(path.resolve(process.cwd(), path1), 'utf-8')
  const file2 = readFileSync(path.resolve(process.cwd(), path2), 'utf-8')
  let result = `{`
  const parseFile1 = JSON.parse(file1)
  const parseFile1Keys = Object.keys(parseFile1)
  const parseFile2 = JSON.parse(file2)
  const parseFile2Keys = Object.keys(parseFile2)
  const allKeys = Array.from(new Set([...parseFile1Keys, ...parseFile2Keys]))
  const allSortKeys = _.sortBy(allKeys)

  for (let p of allSortKeys) {
    if (parseFile1.hasOwnProperty(p) && parseFile2.hasOwnProperty(p)) {
      if (parseFile1[p] === parseFile2[p]) {
        result += `\n   ${p}: ${parseFile1[p]}`
      }
      if (parseFile1[p] !== parseFile2[p]) {
        result += `\n - ${p}: ${parseFile1[p]}`
        result += `\n + ${p}: ${parseFile2[p]}`
      }
    }
    if (parseFile1.hasOwnProperty(p) && !parseFile2.hasOwnProperty(p)) {
      result += `\n - ${p}: ${parseFile1[p]}`
    }
    if (!parseFile1.hasOwnProperty(p) && parseFile2.hasOwnProperty(p)) {
      result += `\n + ${p}: ${parseFile2[p]}`
    }
  }
  result += `\n}`
  console.log(result)
  return result
}