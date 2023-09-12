const { inquirerMenu, pausa } = require('./helper/inquirer.js');
const inquirer = require('inquirer');

require('colors');

const main = async() => {
  console.clear;
  let opt = ''
  do {
    opt =await inquirerMenu();
    console.log({opt});
    await pausa();

    
  } while (opt !== '0');
}

main();