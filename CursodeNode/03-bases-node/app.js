const { crearAchivo } = require('./helpers/multiplicar');

console.clear();
const [ , , arg3] = process.argv;
const [ , base] = arg3.split('=');
console.log(base);

//const base = 4;
crearAchivo(base)
  .then(nombreArchivo => console.log(nombreArchivo,'Creado'))
  .catch( err => console.log(err))