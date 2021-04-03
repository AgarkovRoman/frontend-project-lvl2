import isObjectHasProperty from './utils/isObjectHasProperty.js';

export default function getDiffString(allSortKeys, parseFile1, parseFile2) {
  let result = '{';

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

  return result;
}
