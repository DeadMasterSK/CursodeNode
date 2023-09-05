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

const id = 3;
// getEmpleado(id)
//   .then( empleado => console.log(empleado))
//   .catch(err => console.log(err))

// getSalario(id)
//   .then( salario => console.log(salario))
//   .catch(err => console.log(err))

let nombre;
getEmpleado(id)
  .then(empleado => {
    nombre = empleado;
    return getSalario( id )
  })
  .then(salario => console.log( `El empleado:  ${ nombre } su salario es de: ${salario}  `))  
  .catch(err => console.log(err))
