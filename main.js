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



var productos = [
  {nombre: 'Musculosa deportiva', precio: 2000},
  {nombre: 'Remera Overiceze', precio: 2500},
  {nombre: 'Remera slim', precio: 3000}
];
localStorage.setItem("productos", JSON.stringify(productos));
const productoEnLS = JSON.parse(localStorage.getItem("productos"));
console.log (productoEnLS);



let productoElegido= prompt("Ingrese el producto que quiere adquirir");
console.log(productos.find((producto) => producto.nombre===productoElegido));

let precio = prompt("Ingrese el precio del producto");
let cantidad = prompt("Elija la cantidad del producto");

alert("el subtotal a pagar  es:" + precio * cantidad);
alert("El descuento es del 15%");
alert("El precio a pagar en total con descuento es" + precio * cantidad * 0.85);




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



const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    alert("iniciaste sesion!")
})