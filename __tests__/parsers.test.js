import {
  describe, test, expect, beforeEach, jest,
} from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import parsers from '../src/parsers.js';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const OBJ1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

describe('parsers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('return parse json file', () => {
    const path1 = getFixturePath('file1.json');
    expect(parsers(path1)).toEqual(OBJ1);
  });

  test('return parse yml file', () => {
    const path1 = getFixturePath('file1.yml');
    expect(parsers(path1)).toEqual(OBJ1);
  });
});
