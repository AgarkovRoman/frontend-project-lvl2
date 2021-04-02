import { readFileSync } from 'fs';
import path from 'path';
import getSortKeys from './getSortKeys';
import isObjectHasProperty from './isObjectHasProperty';

export default function readFile(path1, path2) {
  const file1 = readFileSync(path.resolve(process.cwd(), path1), 'utf-8');
  const file2 = readFileSync(path.resolve(process.cwd(), path2), 'utf-8');
  let result = '{';
  const parseFile1 = JSON.parse(file1);
  const parseFile2 = JSON.parse(file2);
  const allSortKeys = getSortKeys(parseFile1, parseFile2);

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
