const fs = require('fs');
const colors = require('colors');

const crearAchivo = async( base , listar = false, hasta) =>{
  try {
    let salida= '';
    for (let i = 1; i <= hasta; i++) {
      salida += (`${ base } x ${ i } = ${ i*base } \n`);
    }
    if (listar) {
      console.log('================'.blue);
      console.log(`Tabla del `, `${base}`.red.underline);
      console.log('================'.blue);
      console.log(colors.rainbow(salida));
    }
      fs.writeFileSync(  `tabla-${base}.txt`, salida );
      return `tabla -${base}.txt creada`
  } catch (error) {
    throw error;
  }
}
  

module.exports = {
  crearAchivo: crearAchivo,
}