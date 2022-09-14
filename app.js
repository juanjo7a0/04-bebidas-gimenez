//VARIABLES

/*
let curso = "coderhouse";
console.log (curso)
let numero_de_alumnos = 181;
console.log(numero_de_alumnos)
let en_curso = true;
console.log(en_curso)
*/

/*
//tipos de datos
//numeros
//cadena de caracteres o STRINGS "coderhouse"
//buleanos o booleans TRUE - FALSE
//diferencias ente LET y CONST
*/

/*
let curso;

curso = "Js";

console.log(curso);
*/

/*
const puntaje = "1000"; //puede ir comillas o no en el mil
if (puntaje == 1000) {
    console.log ("Igualito igualito");
} else {
    console.log ("Na que ver");
}*/

/*const dinero = 600;
const totalAPagar = 500;

if (dinero >= totalAPagar) {
    console.log ("Podemos Pagar")
} else {
    console.log ("Fondos insuficientes")
}*/

/*const dinero = 300;
const totalAPagar = 800;
const tarjeta = false;
if (dinero > totalAPagar) {
    console.log ("Podemos pagar")    
} else if (tarjeta) {
    console.log ("Puedo abonar porque tengo tarjeta")    
} else {
    console.log ("Fondos insuficientes")
}


let precio = prompt ("Ingrese el precio del producto: ");
if (precio >= 100) {
    alert ("El producto es costoso")
} else {
    alert("El precio del producto es a ccesible")
}
*/

/*let precio = prompt ("Ingrese el precio del producto: ");

if (precio >= 100) {
    alert ("El mineral tiene un precio costoso");
} else if (precio >= 50)  alert ("El mineral tiene un precio costoso");
  else {
    alert("El mineral tiene un precio accesible");
}*/

/*
X / Y / X&&Y   t(true) f(false)
t / t / t
t / f / f
f / t / f
f / f / f

Tabla de verdad del operador // OR
X / Y / X//Y
t / t /  t
t / f /  t
f / t /  t
f / f /  f
*/

let nombreBebida = prompt ("Ingrese el nombre de la bebida");
let marcaBebida = prompt ("Ingrese marca de la bebida");
let tamañoBotella = prompt ("Ingrese el tamaño de la botella");

if (nombreBebida !== " " & marcaBebida !== " " & tamañoBotella !== " ") {
    alert ("Nombre de la bebida: " + nombreBebida +  "Marca de la bebida: " + marcaBebida +  "Tamaño de la botella: " + tamañoBotella)
} else {
    alert("No ingreso bebida")
}

const miArray = ["agua", "campari", "cerveza", "champagne", "fernet", "gancia", "gaseosa", "jugo", "tequila", "vodka"];
console.log (miArray.length);

const marcas = ["villavicencio", "fratelli", "quilmes", "maria extra brut", "branca", "fratelli", "coca cola", "tang", "sminorff"];

const miArraymarcas = miArray.concat(marcas)
console.log(miArraymarcas);
console.log(miArray.indexOf("agua","campari","cerveza","champagne","fernet","gancia","gaseosa","jugo","tequila","vodka"));

miArray.forEach ((miArray, indice)=>{
console.log(`${indice}: ${miArray}`);   
});

const carrito = [
    {nombre: "agua", precio: 300},
    {nombre: "campari", precio: 700},
    {nombre: "cerveza", precio: 300},
    {nombre: "champagne", precio: 1100},
    {nombre: "fernet", precio: 1200},
    {nombre: "gaseosa", precio: 350},
    {nombre: "jugo", precio: 100},
    {nombre: "tequila", precio: 1500},
    {nommbre: "vodka", precio: 1500},
];

let total = 0;

carrito.forEach((producto)=>(total += producto.precio));
console.log (total);

let resultado = carrito.reduce((acc, producto) => {
    return acc + producto.precio;
},0);
console.log (resultado);


let bebida = prompt(`Es para regalo?
                     1. Si (valor $100)
                     2. No`);

switch (bebida) {
    case "1": 
      console.log("Si");
      break;
    case "2":
        console.log(`No`)
        break;
default:
    console.log("No ingresaste una opción");
        break;        
}

let numero = Number(prompt("Ingrese cantidad"));

for (let i =1; i <=1; i++){
    let resultado = numero * i
    alert (`${numero} x ${i} =${resultado}`)
}

let option = prompt(`Elija una opcion para que tenga su bebida: 
                     1. Retiro por el local
                     2. Quiero que me lo envien (costo extra dependiendo la zona)
                     3. Retira un conocido`);

switch (option) {
    case "1":
        console.log("Retiro por el local");
        break;
    case "2":
        console.log("Quiero que me lo envien (costo extra dependiendo de la zona)");
        break;
    case "3":
        console.log("Retira un conocido");
        break;
default:
        console.log("No ingresaste una opción");
        break;         
}

function solicitarNombre (){
    let nombre = prompt("Genial, ingresa tu nombre");
    console.log(`El nombre del usuario es: ${nombre}`);
}
solicitarNombre();

function solicitarMail () {
    let mail = prompt("Ahora tu mail, así te enviamos el detalle de tu pedido");
    console.log(`El mail es: ${mail}`);
}
solicitarMail();

let text = prompt (`Muy bien, nos comunicamos por WhatsApp. Deja tu numero de celular:`)

let segundos = prompt (`En 3 segundos serás registrado con tus datos y tu pedido. Apretá ENTER para concretar la compra`)

const numeros = [3, 2 , 1, 0];
for (let i = 0; i<=3; i++) {
   alert(numeros[i]);
}

function Bebida (tipo, marca, precio) {
    this.tipo = tipo;
    this.marca = marca;
    this.precio = precio;
}
const productofernet = new Bebida("Fernet, Branca, 2000");
console.log(productofernet);

function Cliente (nombre, apellido, celular){
    this.nombre = nombre;
    this.apellido = apellido;
    this.celular = celular;
    this.saludos = function () {
        console.log("Saludos" + this.nombre);
    };
}

const cliente1 = new Cliente("Juan, Gimenez, 221");
const cliente2 = new Cliente("Pablo, Gimenez, 221");

cliente1.saludos();
cliente2.saludos();

const texto = document.querySelector ("h1");
console.log(texto);

const textoo = document.querySelector ("h2").textContent="Tenemos todo tipo de bebida para fiestas y eventos";
console.log(textoo);

/*const deleteText = document.querySelector("h3");
deleteText.remove()*/

let agregado = document.createElement("h5");
agregado.innerHTML="<h5>--Prohibida su venta a menores de 18 años--</h5>"
document.body.appendChild(agregado);

const lista = document.querySelector("#listacarrito");
let bebidas = ["Agua", "Campari", "Cerveza", "Champagne", "Fernet", "Gaseosa", "Jugo", "Tequila", "Vodka"];
for (let bebida of bebidas){
    let listado = document.createElement("li");
    listado.innerHTML=bebida
    lista.appendChild(listado);
}