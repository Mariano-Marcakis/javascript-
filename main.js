let ingrseSuNombre = prompt("ingrese su nombre");
function saludar(nombre) {
  alert("hola" + nombre);
}
/*let edad = prompt("Ingrese su edad");
if (edad >= 18) {
  saludar(ingrseSuNombre);
} else {
  alert("Eres menor de edad, vuelve cuando cumplas 18");
}*/

let edad = prompt("Ingrese su edad");
let mayor = 18;
if (edad >= 18) saludar(ingrseSuNombre);

while (edad < 18) {
  alert("Vuelve cuando tengas 18");
  prompt("ingrese su edad");
}

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

