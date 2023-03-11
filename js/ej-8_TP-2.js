/*
Ejercicio 8
Crea script para generar pirámide siguiente con los números del 1 
al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
……
*/
let limite;
do {
  limite = parseInt(prompt("Ingrese un número (no mayor a 50)"));
  if (limite > 50 || limite <= 0 || isNaN(limite)) {
    alert("El número ingresado es inválido.\nIngrese un número del 1 al 50");
  }
} while (limite > 50 || limite <= 0 || isNaN(limite));

document.write("<h5 class='display-5 text-center'>Resultado</h5>");
for (let filas = 1; filas <= limite ; filas++) {
    document.write("<p class='px-5 fs-5 text-primary'>")
    for (let columnas = 1; columnas < filas; columnas++) {
        document.write(`${columnas}`)
    }
    document.write(`${filas}`)
    document.write("</p>");
}