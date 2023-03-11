/*
Ejercicio 7
Haz un script que escriba una pirámide inversa de los números del 1 al 
número que indique el usuario (no mayor de 50)  de la siguiente forma : 
(suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
let limite;
do {
  limite = parseInt(prompt("Ingrese un número (no mayor a 50)"));
  if (limite > 50 || limite <= 0 || isNaN(limite)) {
    alert("El número ingresado es inválido.\nIngrese un número del 1 al 50");
  }
} while (limite > 50 || limite <= 0 || isNaN(limite));

document.write("<h5 class='display-5 text-center'>Resultado</h5>");
for (let filas = limite; filas <= limite && filas > 0; filas--) {
  document.write("<p class='px-5 fs-5 text-primary'>");
  for (let columnas = 1; columnas < filas; columnas++) {
    document.write(`${filas}`);
  }
  document.write(`${filas}`);
  document.write("</p>");
}
