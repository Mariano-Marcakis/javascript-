let ingrseSuNombre = prompt("ingrese su nombre");
function saludar(nombre) {
  alert("hola" + nombre);
}


let edad = prompt("Ingrese su edad");
let mayor = 18;
if (edad >= 18) saludar(ingrseSuNombre);

while (edad < 18) {
  alert("Vuelve cuando tengas 18");
edad = prompt("ingrese su edad");

}

/*function Producto (titulo, color, precio) {
  this.titulo = titulo;
  this.color = color;
  this.precio = precio; 
}
const producto1 = new Producto("Remera slim","blanco", 3000);
const producto2 = new Producto("Musculosa","Negra", 4500);
console.log(producto1);
console.log(producto2);
*/

const productos = [
  {nombre: 'Musculosa deportiva', precio: 2000},
  {nombre: 'Remera Overiceze', precio: 2500},
  {nombre: 'Remera slim', precio: 3000}
];
/*
productos.forEach((producto) => {
  console.log(producto.nombre.precio)
}) DESCOMENTAR UN SEGUNDO*/ 

let productoElegido= prompt("Ingrese el producto que quiere adquirir");
console.log(productos.find((producto) => producto.nombre===productoElegido));

let precio = prompt("Ingrese el precio del producto");
let cantidad = prompt("Elija la cantidad del producto");

alert("el subtotal a pagar  es:" + precio * cantidad);
alert("El descuento es del 15%");
alert("El precio a pagar en total con descuento es" + precio * cantidad * 0.85);



// switch
let diaDeLaSemana = Number(
  prompt(
    "Ingrese que dia de la semana con numeros va a retirar su pedido (ejemplo: 1=lunes) "
  )
);
switch (diaDeLaSemana) {
  case 1:
    alert("Lo esperamos este Lunes");
    break;
  case 2:
    alert("Lo esperamos este Martes");
    break;
  case 3:
    alert("Lo esperamos este Miércoles");
    break;
  case 4:
    alert("Lo esperamos este Jueves");
    break;
  case 5:
    alert("Lo esperamos este Viernes");
    break;
  case 6:
    alert("Lo esperamos este Sábado");
    break;
  case 7:
    alert("Lo esperamos este Domingo");
    break;
  default:
    alert("Ese día no existe");
    break;
}
const metodosPago = ["Tarjeta de crédito", "PayPal", "Transferencia bancaria", "Pago en efectivo"];
 
let selectMetodoPago = document.createElement("select");

for (let i = 0; i < metodosPago.length; i++) {
    let option = document.createElement("option");
  option.text = metodosPago[i];
  selectMetodoPago.add(option);
}

document.body.appendChild(selectMetodoPago);


/*

var productos = [
  {nombre: 'Musculosa deportiva', precio: 2000},
  {nombre: 'Remera Overiceze', precio: 2500},
  {nombre: 'Remera slim', precio: 3000}
];

productos.forEach((producto) => {
  console.log(producto.nombre)
}) */