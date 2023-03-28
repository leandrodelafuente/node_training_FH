const {crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');

console.clear();

//console.log(argv);

crearArchivo(argv.base, argv.cycle, argv.list)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
