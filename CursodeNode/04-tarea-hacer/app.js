const { inquirerMenu, pausa } = require('./helper/inquirer.js');
const { Tarea } = require('./models/tarea.js');
const { Tareas } = require('./models/tareas.js');
const inquirer = require('inquirer');

require('colors');

const main = async() => {
  console.clear;
  let opt = ''
  do {
    // opt =await inquirerMenu();
    // console.log({opt});

    const tareav= new Tarea('Comprar Comida');
    console.log(tarea);

    await pausa();

    
  } while (opt !== '0');
}

main();