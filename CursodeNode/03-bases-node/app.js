const { crearAchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

crearAchivo( argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo,'Creado'))
  .catch( err => console.log(err))//const base = 4;
