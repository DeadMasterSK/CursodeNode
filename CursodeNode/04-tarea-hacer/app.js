const { inquirerMenu,
      pausa,
      leerinput } = require('./helper/inquirer.js');
const  Tareas  = require('./models/tareas.js');

require('colors');

const main = async() => {

  let opt = ''
  const tareas = new Tareas();

  do {
    opt =await inquirerMenu();

    switch (opt) {
      case '1':
        const desc = await leerinput('Descripcion: ');
        tareas.crearTarea( desc );
        break;
      case '2':
        console.log(tareas.listadoArr);
        break;
    
      default:
        break;
    }

    await pausa();

    
  } while (opt !== '0');
}

main();