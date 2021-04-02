import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';

export default function readFile(path1, path2) {
  const file1 = readFileSync(path.resolve(process.cwd(), path1), 'utf-8');
  const file2 = readFileSync(path.resolve(process.cwd(), path2), 'utf-8');
  let result = '{';
  const parseFile1 = JSON.parse(file1);
  const parseFile1Keys = Object.keys(parseFile1);
  const parseFile2 = JSON.parse(file2);
  const parseFile2Keys = Object.keys(parseFile2);
  const allKeys = Array.from(new Set([...parseFile1Keys, ...parseFile2Keys]));
  const allSortKeys = _.sortBy(allKeys);

  const isObjectHasProperty = (object, property) => Object.prototype.hasOwnProperty.call(object, property);

  allSortKeys.forEach((key) => {
    if (isObjectHasProperty(parseFile1, key) && isObjectHasProperty(parseFile2, key)) {
      if (parseFile1[key] === parseFile2[key]) {
        result += `\n   ${key}: ${parseFile1[key]}`;
      }
      if (parseFile1[key] !== parseFile2[key]) {
        result += `\n - ${key}: ${parseFile1[key]}`;
        result += `\n + ${key}: ${parseFile2[key]}`;
      }
    }
    if (isObjectHasProperty(parseFile1, key) && !isObjectHasProperty(parseFile2, key)) {
      result += `\n - ${key}: ${parseFile1[key]}`;
    }
    if (!isObjectHasProperty(parseFile1, key) && isObjectHasProperty(parseFile2, key)) {
      result += `\n + ${key}: ${parseFile2[key]}`;
    }
  });
  result += '\n}';
  console.log(result);
  return result;
}
