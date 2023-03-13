/*
Ejercicio 15
Realiza un script que cuente el número de vocales que tiene un texto.
*/
let texto = prompt("Ingrese un texto para contar sus vocales:");

let letraEvaluada = "";

let contadorLetraA = 0;
let contadorLetraE = 0;
let contadorLetraI = 0;
let contadorLetraO = 0;
let contadorLetraU = 0;

if (texto === "" || texto === null) {
  document.write("<section class='container'>");
  document.write(`<h5 class='display-5 text-center text-danger'>No ha ingresado ninguna frase</h5>`);
  document.write("</section>");
} else {
  for (let letraIterada = 0; letraIterada < texto.length; letraIterada++) {
    letraEvaluada = texto.charAt(letraIterada);
    console.log(letraIterada);
    console.log(letraEvaluada);
    switch (letraEvaluada) {
      case "a" || "A" || "á" || "Á":
        contadorLetraA++;
        break;
      case "e" || "E" || "é" || "É":
        contadorLetraE++;
        break;
      case "i" || "I" || "í" || "Í":
        contadorLetraI++;
        break;
      case "o" || "O" || "ó" || "Ó":
        contadorLetraO++;
        break;
      case "u" || "U" || "ú" || "Ú":
        contadorLetraU++;
        break;
    }
  }
  const totalVocales = contadorLetraA + contadorLetraE + contadorLetraI + contadorLetraO + contadorLetraU;
  if (totalVocales !== 0) {
    document.write("<section class='container'>");
  document.write(
    `<p class='display-5 text-center text-success'>La cantidad de letras vocales encontradas en el texto /${texto}/ es:</p>`
  );
  document.write("<ul class='list-unstyled'>");
  document.write(`<li class=' list-item fs-3 text-secondary'>Letras A: ${contadorLetraA}</li>`);
  document.write(`<li class=' list-item fs-3 text-secondary'>Letras E: ${contadorLetraE}</ñ>`);
  document.write(`<li class=' list-item fs-3 text-secondary'>Letras I: ${contadorLetraI}</li>`);
  document.write(`<li class=' list-item fs-3 text-secondary'>Letras O: ${contadorLetraO}</li>`);
  document.write(`<li class=' list-item fs-3 text-secondary'>Letras U: ${contadorLetraU}</ñ>`);
  document.write(
    `<li class='display-4 text-center text-primary'>El total de vocales encontrados es ${totalVocales}</li>`
  );
  document.write("</ul>");
  document.write("</section>");
  }else{
    document.write("<section class='container'>");
  document.write(`<h5 class='display-5 text-center text-danger'>No ha se ha encontrado ninguna vocal</h5>`);
  document.write("</section>");
  }
  
}
