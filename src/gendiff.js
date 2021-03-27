import { Command } from 'commander/esm.mjs';

export function gendiff() {
    const program = new Command();

    program
        .version('1.0.0')
        .arguments('<filepath1>, <filepath2>')
        .description('Compares two configuration files and shows a difference.')
        .option('-f, --format [type]', 'output format')

    program.parse();
}
