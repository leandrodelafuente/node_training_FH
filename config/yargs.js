const argv = require('yargs')
        .options({
            'b': {
                alias: 'base',
                type: 'number',
                demandOption: true
            },
            'l': {
                alias: 'list',
                type: 'boolean',
                default: false
            },
            'c': {
                alias: 'cycle',
                type: 'number',
                default: 10
            }
        })
        .check((argv, options) => {
            if (isNaN (argv.b)){
                throw 'Base must be a number';
            }
            if (isNaN (argv.c)){
                throw 'Cycle must be a number';
            }
            return true;
        })
        .argv;

        module.exports = argv;