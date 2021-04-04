import {
  describe, expect, test,
} from '@jest/globals';
import getSortKeys from '../src/utils/getSortKeys.js';

describe('getSortKeys', () => {
  const OBJ1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const OBJ2 = {
    timeout: 20, verbose: true, host: 'hexlet.io',
  };
  const expectedSortKeys = ['follow', 'host', 'proxy', 'timeout', 'verbose'];

  test('should return sorted keys', async () => {
    expect(getSortKeys(OBJ1, OBJ2)).toEqual(expectedSortKeys);
  });
});
