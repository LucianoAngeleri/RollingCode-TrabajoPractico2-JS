/*
Ejercicio 17
Realiza un script que muestre la posición de la primera vocal 
de un texto introducido por teclado.
*/
let texto = prompt("Ingrese un texto:");

let letraEvaluada = "";
let posicionVocal = 0;

if (texto === "" || texto === null) {
  document.write("<section class='container'>");
  document.write(`<h5 class='display-5 text-center text-danger'>No ha ingresado ninguna frase</h5>`);
  document.write("</section>");
} else {
  for (let i = 0; i < texto.length; i++) {
    letraEvaluada = texto.charAt(i);
    switch (letraEvaluada) {
      case "a" || "A" || "á" || "Á":
        posicionVocal = i+1;
        break;
      case "e" || "E" || "é" || "É":
        posicionVocal = i+1;
        break;
      case "i" || "I" || "í" || "Í":
        posicionVocal = i+1;
        break;
      case "o" || "O" || "ó" || "Ó":
        posicionVocal = i+1;
        break;
      case "u" || "U" || "ú" || "Ú":
        posicionVocal = i+1;
        break;
    }
    if (posicionVocal !== 0) {
        break;
    }
  }
  if (posicionVocal !== 0) {
    document.write("<section class='container'>");
    document.write('<div class="d-flex align-items-center flex-column">')
    document.write(`<h5 class='display-5 text-center text-success'>Posición de la primera vocal:</h5>`);
    document.write(`<p class='display-4 w-25 px-2 text-center text-bg-success rounded rounded-pill'>${posicionVocal}</p>`);
    document.write("</div>");
    document.write("</section>");
  }else{
    document.write("<section class='container'>");
    document.write(`<h5 class='display-5 text-center text-danger'>No ha se ha encontrado ninguna vocal</h5>`);
    document.write("</section>");
  }
  
}