const { resolve } = require('path');

require('colors');

const mostrarMenu = () =>{
  return new Promise(resolve =>{
    console.clear();
    console.log('=============================='.bgBlue);
    console.log('   Seleccione una opcion:');
    console.log('==============================\n'.bgBlue);
  
    console.log(`${`1.`.blue} Crear tarea`);
    console.log(`${`2.`.blue} Listar tareas`);
    console.log(`${`3.`.blue} Listar tareas completadas`);
    console.log(`${`4.`.blue} Listar tareas pendientes`);
    console.log(`${`5.`.blue} Completar tarea(s)`);
    console.log(`${`6.`.blue} Borrar tarea`);
    console.log(`${`0.`.blue} Salir`);
    console.log(`${`8.`.blue} Dibujo\n`);
  
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readLine.question('Seleccione una opcion: '.red, (opt) =>{
      readLine.close();
      resolve(opt);
    });
  })
}

const pausa = () =>{
  return new Promise(resolve =>{
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    readLine.question(`\nPresiones ${`Enter`.bgWhite} para continuar: `.red, (opt) =>{
      readLine.close();
      resolve();
    });

  });
}

module.exports = {
  mostrarMenu,
  pausa
}

// console.log("  /\\_/\\");
// console.log(" ( o.o )");
// console.log("  > ^ <");

// console.log("      /\\_/\\");
// console.log("     ( o o )");
// console.log("    (  =^=  )");
// console.log("     (\\_^_/)");

// console.log(`´´´´´´´´´´´´´´´´´´´ ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´´´´´´´¶¶¶¶¶¶´´´´´´´´´´´´´¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´´´´¶¶¶¶´´´´´´´´´´´´´´´´´´´´´´´¶¶¶¶´´´´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´´´¶¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´´´´´´´´´`);
// console.log(`´´´´´´´´´´¶¶´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´¶¶´´´´´´´´´´`);
// console.log(`´´´´´´´´´´¶¶´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´¶´´´´´´´´´´`);
// console.log(`´´´´´´´´´´¶¶´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´¶´´´´´´´´´´`);
// console.log(`´´´´´´´´´´¶¶´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´¶¶´´´´´´´´´´`);
// console.log(`´´´´´´´´´´¶¶´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´¶¶´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´¶¶´¶¶´´´¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶´´´¶¶´¶¶´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´´¶¶¶¶´¶¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶¶¶´¶¶¶¶¶´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´´´¶¶¶´¶¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶¶¶´¶¶¶´´´´´´´´´´´´´`);
// console.log(`´´´´¶¶¶´´´´´´´¶¶´´¶¶¶¶¶¶¶¶´´´´´´´¶¶¶¶¶¶¶¶¶´´¶¶´´´´´´¶¶¶¶´´´`);
// console.log(`´´´¶¶¶¶¶´´´´´¶¶´´´¶¶¶¶¶¶¶´´´¶¶¶´´´¶¶¶¶¶¶¶´´´¶¶´´´´´¶¶¶¶¶¶´´`);
// console.log(`´´¶¶´´´¶¶´´´´¶¶´´´´´¶¶¶´´´´¶¶¶¶¶´´´´¶¶¶´´´´´¶¶´´´´¶¶´´´¶¶´´`);
// console.log(`´¶¶¶´´´´¶¶¶¶´´¶¶´´´´´´´´´´¶¶¶¶¶¶¶´´´´´´´´´´¶¶´´¶¶¶¶´´´´¶¶¶´`);
// console.log(`¶¶´´´´´´´´´¶¶¶¶¶¶¶¶´´´´´´´¶¶¶¶¶¶¶´´´´´´´¶¶¶¶¶¶¶¶¶´´´´´´´´¶¶`);
// console.log(`¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶´´´´¶¶¶¶¶¶¶´´´´¶¶¶¶¶¶¶¶´´´´´´¶¶¶¶¶¶¶¶`);
// console.log(`´´¶¶¶¶´¶¶¶¶¶´´´´´´¶¶¶¶¶´´´´´´´´´´´´´´¶¶¶´¶¶´´´´´¶¶¶¶¶¶´¶¶¶´`);
// console.log(`´´´´´´´´´´¶¶¶¶¶¶´´¶¶¶´´¶¶´´´´´´´´´´´¶¶´´¶¶¶´´¶¶¶¶¶¶´´´´´´´´`);
// console.log(`´´´´´´´´´´´´´´¶¶¶¶¶¶´¶¶´¶¶¶¶¶¶¶¶¶¶¶´¶¶´¶¶¶¶¶¶´´´´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´´´´´´´´¶¶´¶¶´¶´¶´¶´¶´¶´¶´¶´¶´¶¶´´´´´´´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´´´´´´¶¶¶¶´´¶´¶´¶´¶´¶´¶´¶´¶´´´¶¶¶¶¶´´´´´´´´´´´´´´`);
// console.log(`´´´´´´´´´´´´¶¶¶¶¶´¶¶´´´¶¶¶¶¶¶¶¶¶¶¶¶¶´´´¶¶´¶¶¶¶¶´´´´´´´´´´´´`);
// console.log(`´´´´¶¶¶¶¶¶¶¶¶¶´´´´´¶¶´´´´´´´´´´´´´´´´´¶¶´´´´´´¶¶¶¶¶¶¶¶¶´´´´`);
// console.log(`´´´¶¶´´´´´´´´´´´¶¶¶¶¶¶¶´´´´´´´´´´´´´¶¶¶¶¶¶¶¶´´´´´´´´´´¶¶´´´`);
// console.log(`´´´´¶¶¶´´´´´¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶´´´´´¶¶¶´´´´`);
// console.log(`´´´´´´¶¶´´´¶¶¶´´´´´´´´´´´¶¶¶¶¶¶¶¶¶´´´´´´´´´´´¶¶¶´´´¶¶´´´´´´`);
// console.log(`´´´´´´¶¶´´¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶´´¶¶´´´´´´`);
// console.log(`´´´´´´´¶¶¶¶´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´¶¶¶¶´´´´´´´`);


