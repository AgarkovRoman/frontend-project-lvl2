import program from 'commander';
import readFile from './readFile.js';

export default function genDiff() {
  program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format')
    .arguments('<filepath1>, <filepath2>')
    .action((path1, path2) => {
      readFile(path1, path2);
    });
  program.parse();
}
