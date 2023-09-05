const empleados = [
  {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
  ];
  
  const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
      id: 3,
      salario: 2000
  }
  ];
  
  const getEmpleado = ( id ) => {
  
    return new Promise((resolve, reject) => {
      const empleado = empleados.find( e => e.id === id )?.nombre;
      
      if (empleado) {
        resolve( empleado );
      } else {
        reject `No existen empleado con id ${ id }`
      }
    });
  }
  
  const getSalario = ( id ) => {
  
    return new Promise((resolve, reject) =>{
      const salario = salarios.find(c => c.id === id)?.salario;
  
      if(salario){
        resolve(salario);
      }else{
        reject `No existe salario con id ${id}`;
      }
    });
  }

  const getInfoUsuario= async() => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El empleado:  ${ empleado } su salario es de: ${salario}  `;
  
  } catch (error) {
    return error;
  }
}

  const id = 10;

  getInfoUsuario( id )
  .then( msg => console.log(msg))
  .catch( err => console.log(err));
