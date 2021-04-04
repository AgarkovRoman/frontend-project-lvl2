import {
  beforeEach,
  describe, expect, jest, test,
} from '@jest/globals';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import readFile from '../src/readFile';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('readFile', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('return result of diff', () => {
    const path1 = getFixturePath('file1.json');
    const path2 = getFixturePath('file2.json');
    const EXPECTED_DIFF_STRING = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;
    expect(readFile(path1, path2)).toEqual(EXPECTED_DIFF_STRING);
  });
});
