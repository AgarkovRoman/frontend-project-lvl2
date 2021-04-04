import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import path from 'path';

export default function parsers(configPath) {
  const format = path.extname(configPath);
  const fileData = readFileSync(path.resolve(process.cwd(), configPath), 'utf-8');
  let parseFunc;
  if (format === '.json') {
    parseFunc = JSON.parse;
  } else if (format === '.yml') {
    parseFunc = yaml.load;
  }
  return parseFunc(fileData);
}
