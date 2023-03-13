/*
Ejercicio 3

Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas 
 con un guión -.
Nota: usar confirm()
*/
let union = "";
do {
  let cadena = prompt("Ingrese una cadena de texto");
  if (cadena !== null && cadena !== "") {
    union += cadena + " - ";
  }
} while (confirm("Desea agregar mas texto?"));

union = union.substring(0,union.length-3)
if (union === "") {
  document.write(`<p class="fs-2 text-center text-danger">No ingresó ningun texto<p>`);
} else {
  document.write(`<p class="fs-2 text-center text-success">${union}<p>`);
}
