const inquirer = require('inquirer');
require('colors');

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
      {
        value: '1',
        name: `${`1.`.blue} Crear tareas`
      },
      {
        value: '2',
        name: `${`2.`.blue} Listar tareas`
      },
      {
        value: '3',
        name: `${`3.`.blue} Listar tareas completadas`
      },
      {
        value: '4',
        name: `${`4.`.blue} Listar tareas pendientes`
      },
      {
        value: '5',
        name: `${`5.`.blue} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${`6.`.blue} Borrar tarea`
      },
      {
        value: '0',
        name: `${`0.`.blue} Salir`
      },
      {
        value: '8',
        name: `${`8.`.blue} Dibujo\n`
      }
    ],
  }
];

const inquirerMenu = async() =>{
  
  console.log('=============================='.bgBlue);
  console.log('   Seleccione una opcion:');
  console.log('=============================='.bgBlue);
  console.log('\n');
  const {opcion}= await inquirer.prompt(preguntas);
  
  return opcion;
}

const pausa = async() => {

  const question = [
    {
      type: 'input',
      name: 'enter',
      message:`Presione ${ 'Enter'.green} para continuar`
    }
  ];
  console.log('\n');
  await inquirer.prompt(question)
  
}

const leerinput = async( message) =>{
  const question = [ 
    { 
      type: 'input',
      name: 'desc',
      message,
      validate(value){
        if (value.length === 0) {
          return 'Por favor ingrese un valor'
        }
        return true;
      }
    }
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
}


  module.exports={
    inquirerMenu,
    pausa,
    leerinput
  }