/*
Ejercicio 13
Realiza un script que pida un texto y lo muestre en mayúsculas.
*/
let textosAgregados =[];
let texto = "";
let agregarTexto = true;
let contador = 0;

document.write("<section class='container'>");

while (agregarTexto) {
  if (confirm("¿Desea agregar texto?")) {
    texto = prompt("Ingrese el texto que desea agregar:").toUpperCase();
    textosAgregados.push(texto)
    alert("Se añadió el texto con éxito");
    document.write(`<h5 class='display-5 text-center'>Texto N°${contador + 1}</h5>`);
    document.write("<div class='d-flex justify-content-center'>");
    document.write(
      `<p class='p-4 m-2 w-25 text-center fs-1 text-bg-primary rounded rounded-4'>${textosAgregados[contador]}</p>`
    );
    document.write("</div>");
    contador++;
  } else {
    agregarTexto = false;
  }
}
document.write("</section>");