import { readFileSync } from 'fs';
import path from 'path';
import getSortKeys from './utils/getSortKeys.js';
import getDiffString from './getDiffString.js';

export default function readFile(path1, path2) {
  const file1 = readFileSync(path.resolve(process.cwd(), path1), 'utf-8');
  const file2 = readFileSync(path.resolve(process.cwd(), path2), 'utf-8');
  const parseFile1 = JSON.parse(file1);
  const parseFile2 = JSON.parse(file2);
  const allSortKeys = getSortKeys(parseFile1, parseFile2);
  const result = getDiffString(allSortKeys, parseFile1, parseFile2);
  console.log(result);
  return result;
}
