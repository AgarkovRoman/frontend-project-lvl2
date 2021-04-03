import _ from 'lodash';

export default function getSortKeys(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const allKeys = Array.from(new Set([...keys1, ...keys2]));
  return _.sortBy(allKeys);
}
