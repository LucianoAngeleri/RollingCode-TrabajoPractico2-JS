/*
Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos 
de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 
mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido 
mostrar el mensaje “Introduce un número válido”.
*/
let nota;
do {
  nota = parseFloat(prompt("Ingrese su calificación:"));
  if (nota === "" || isNaN(nota) || nota < 0 || nota > 10){
    alert("Ingresó una calificación erróneo");
    alert("Ingrese un número válido");
  }
} while (nota === "" || isNaN(nota) || nota < 0 || nota > 10);
switch (true) {
    case nota >= 0 && nota <= 2.5:
      document.write(`<h5 class="display-3 text-center">Resultado</h5>"`);
      document.write(`<p class="text-center text-danger fs-1">Su calificación es ${nota}, es MUY DEFICIENTE</p>"`);
      break;
      case nota > 2.5 && nota <= 4.5:
      document.write(`<h5 class="display-3 text-center">Resultado</h5>"`);
      document.write(`<p class="text-center text-warning fs-1">Su calificación es ${nota}, es INSUFICIENTE</p>"`);
      break;
      case nota > 4.5 && nota <= 6.5:
      document.write(`<h5 class="display-3 text-center">Resultado</h5>"`);
      document.write(`<p class="text-center text-success fs-1">Su calificación es ${nota}, es SUFICIENTE</p>"`);
      break;
      case nota > 6.5 && nota <= 8.5:
      document.write(`<h5 class="display-3 text-center">Resultado</h5>"`);
      document.write(`<p class="text-center text-success fs-1">Su calificación es ${nota}, es BUENO</p>"`);
      break;
      case nota > 8.5 && nota <= 9.5:
      document.write(`<h5 class="display-3 text-center">Resultado</h5>"`);
      document.write(`<p class="text-center text-success fs-1">Su calificación es ${nota}, es NOTABLE</p>"`);
      break;
      case nota > 9.5 && nota <= 10:
      document.write(`<h5 class="display-3 text-center">Resultado</h5>"`);
      document.write(`<p class="text-center text-success fs-1">Su calificación es ${nota}, es SOBRESALIENTE</p>"`);
      break;
  }