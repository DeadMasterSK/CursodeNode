const fs = require('fs');

const crearAchivo = async( base ) =>{

  try {
    let salida = ' ';
    for (let i = 1; i <= 10; i++) {
      salida += (`${ base } x ${ i } = ${ i*base } \n`);
    }
    
    console.log('================');
    console.log(`Tabla del ${base}`);
    console.log('================');
    console.log(salida);
  
      fs.writeFileSync(  `tabla-${base}.txt`, salida );
      return `tabla -${base}.txt creada`
  
    
  } catch (error) {
    throw error;
  }

  
}
  

module.exports = {
  crearAchivo: crearAchivo,
}