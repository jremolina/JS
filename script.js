// // // operadores

// // const suma = 2 + 2;
// // const resta = 2 - 2;
// // const multiplicacion = 2 * 2;
// // const division = 2 / 2;
// // const residuo = 2 % 2;
// // const potencia = 2 ** 2;

// // console.log(suma),
// // console.log(resta),
// // console.log(multiplicacion),
// // console.log(division),
// // console.log(potencia)

// // let variabledeejemplo = 5;
// // console.log(variabledeejemplo);

// // let x = 5;
// // let y = 9;

// // function suma(x, y) {
// //     return x + y
// // }

// // let a = 15;

// // let respuesta = suma(x, y);

// // console.log(`la respuesta de sumar ${x} + ${y}  es:  ${respuesta}`);

// // function transormarcelsiusafarenheit(a) {
// //     return ((a * (9 / 5)) + 32)
// // }

// // const transformarCelsiusAFahrenheit2 = a => (a * (9 / 5)) + 32;

// // console.log(transormarcelsiusafarenheit(parseInt(a)));

// // console.log(transformarCelsiusAFahrenheit2(parseInt(a)));

// // ///////////////////////////objetos //////////////////////////////////

// let auto = {
//     marca: 'fiat',
//     modelo: '98',
//     peso: 1500
// };

// let auto2 = {
//     marca: 'chevrolet',
//     modelo: '99',
//     peso: 1500
// };

// console.table(auto)

// auto.marca = 'ford';
// console.table(auto)

// const vendedor = {
//     nombre: 'Juan',
//     apellido: 'Pérez',
//     edad: 30,
//     auto: {
//         marca: 'fiat',
//         modelo: '98',
//         peso: 1500
//     },
//     venderAuto: function () {
//         console.log('vender auto')
//     },
//     nombreCompleto: function () {
//         return `${this.nombre} ${this.apellido}`
//     }
// }

// console.table(vendedor.nombreCompleto());


// // ///////////////////////////DOM BASICO //////////////////////////////////

// function mostrar(){
//     document.getElementById('seleccionable').innerHTML = Date()
// }


// // ///////////////////////////arreglos  //////////////////////////////////


const cursos = ["Python", "Java", "c sharp", "dart"];
console.log(cursos);

const ciudades = new Array(5);
ciudades[0] = "Barranquilla";

console.log(ciudades);

// let cursos2 = ''

// for (let index = 0; index < cursos.length; index++) {
//     cursos2 += "<li>" + cursos[index] + "</li>";
//     //const element = cursos[index];

// }

// document.getElementById('seleccionable').innerHTML = cursos2

let frutas = ["manzanas", "peras", "piñas", "naranjas", "bananas", "peras"];
const resultado = frutas.filter((x) => x == "peras");
console.log(resultado);

let personas = [
  { nombre: "jhonny", apellido: "remolina" },
  { nombre: "alejandro", apellido: "remolina" },
  { nombre: "elvira", apellido: "huyke" },
];

const filtropersonas = personas.filter((x) => x.apellido == "remolina");
console.log(filtropersonas);

let a = "";

for (let index = 0; index < filtropersonas.length; index++) {
  a +=
    "<li>" +
    filtropersonas[index].nombre +
    " " +
    filtropersonas[index].apellido +
    "</li>";
}

document.getElementById('seleccionable').innerHTML = a;

let frutas2 = ["manzanas", "peras", "piñas", "naranjas", "bananas", "peras"];
const resultadodefrutas2 = frutas2.map((x) => {
  if (x == "manzanas") return "naranjas";
});
console.log(resultadodefrutas2);

let frutas3 = ["manzanas", "peras", "piñas", "naranjas", "bananas", "peras"];
const resultadodefrutas3 = frutas3.fill("naranjas", 2);
console.log(resultadodefrutas3);

let frutas4 = ["manzanas", "peras", "piñas", "naranjas", "bananas", "peras"];
const resultadodefrutas4 = frutas4.find((x) => x == "peras");
console.log(resultadodefrutas4);

let frutas5 = ["manzanas", "peras", "piñas", "naranjas", "bananas", "peras"];
const resultadodefrutas5 = frutas5.findIndex((x) => x == "peras");
console.log(resultadodefrutas5);

let frutas6 = ["manzanas", "peras", "piñas", "naranjas", "bananas", "peras"];
const resultadodefrutas6 = frutas6.push("Coco");
console.log(frutas6);

document.getElementById("seleccionable2").innerHTML = frutas6.join(", ");

console.log(frutas5.concat(frutas6));

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20];
console.log(
  numeros.sort((x, y) => {
    return x - y;
  })
);

const autos = [
  { marca: "Toyota", modelo: "Corolla", año: 2020 },
  { marca: "Ford", modelo: "Mustang", año: 2021 },
  { marca: "Chevrolet", modelo: "Camaro", año: 2019 },
];

console.log(
  autos.sort((x, y) => {
    return x.año - y.año;
  })
);


// // /////////////////////////// Fechas //////////////////////////////////

let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const date = new Date();

let res = date.getDate() + ' ' + meses[date.getMonth()] + ' ' + date.getFullYear();
console.log(res);

date.getUTCDate();
console.log(date);

document.getElementById("fechas").innerHTML = date;


// // /////////////////////////// Math //////////////////////////////////

console.log(Math.PI)

let numero = 5.74

console.log(Math.round(numero).toPrecision(3));
console.log(Math.fround(numero).toPrecision(3));

let redondear = "<p> redondear => " + Math.round(numero).toPrecision(3) + "</p>";

document.getElementById("math").innerHTML = redondear


///////////////////// condicionales /////////////////////////

let edad = Math.round((Math.random()) * 100);
console.log(edad)

if (edad > 60) {
  console.log('no')
} else {
  if (edad < 18) {
    console.log('no')
  } else {
    console.log('si')
  }
}

let estilo = 'cumbia'

switch (estilo) {
  case 'pop':
    console.log('bruno mars')
    break;
  case 'rock':
    console.log('metallica')
    break;
  default:
    console.log('no existe')
    break;
}

/////////////// bucles  for ///////////////

let dias = ['lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

let bucle = document.getElementById("bucle")
let texto = ''

for (let index = 0; index < dias.length; index++) {
  texto += dias[index];

  if (index < dias.length - 1) {
    texto += ', '
  }
  bucle.textContent = texto
  // console.log(element);
}

let bucle2 = document.getElementById("bucle2")
let texto2 = ''

for (const dia of dias) {
  texto2 += dia;

  if (dia != dias[dias.length - 1]) {
    texto2 += ', '
  }
  bucle2.textContent = texto2
  // console.log(element);
}

for (const clave in personas) {
  console.log(personas[clave])

}

cursos.forEach(element => {
  console.log(element);
  
});


/////////////// bucles  while ///////////////

let edad2 = 8;

while (edad2 < 18) {
  console.log('menor de edad')
  edad2++  
}
console.log('mayor de edad')


/////////////////////// sets y maps /////////////////////

let empleados = new Set(['Juan', 'Pedro', 'Maria', 'Ana', 'Luis', 'Carlos', 'Pedro', 'Carlos'])
console.log(empleados)
empleados.add('Jhonny')
console.log(empleados)
empleados.delete('Maria')
console.log(empleados)
let consulta = empleados.has('Jhonny')
console.log(consulta);
consulta = empleados.size
console.log(consulta);

consulta = empleados.values()
console.log(consulta);
