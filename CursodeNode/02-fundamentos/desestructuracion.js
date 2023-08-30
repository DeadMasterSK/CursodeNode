const deadpoll = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  getNombre(){
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  }
}
console.log(deadpoll.getNombre());

// const nombre = deadpoll.nombre;
// const apellido = deadpoll.apellido;
// const poder = deadpoll.poder; 
// console.log(nombre, apellido, poder);

function imprimeHeroe( heroe){
  const { nombre, apellido, poder } = deadpoll;
  console.log(nombre, apellido, poder  );
}

// imprimeHeroe( deadpoll );

const heroes = [ 'Batman', 'Super Man', 'DeadPoll'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [ , , h3] = heroes;


console.log(h3);