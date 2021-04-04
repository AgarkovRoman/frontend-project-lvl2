import getSortKeys from './utils/getSortKeys.js';
import getDiffString from './getDiffString.js';
import parsers from './parsers.js';

export default function readFile(path1, path2) {
  const parseFile1 = parsers(path1);
  const parseFile2 = parsers(path2);
  const allSortKeys = getSortKeys(parseFile1, parseFile2);
  const result = getDiffString(allSortKeys, parseFile1, parseFile2);
  console.log(result);
  return result;
}
