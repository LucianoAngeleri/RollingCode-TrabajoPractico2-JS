/*
Ejercicio 12
Realiza un script que genere un número aleatorio entre 1 y 99
*/
let numerosRandom = [];
let agregarNumeros = true;
let contador = 0;

document.write("<section class='container'>");

while (agregarNumeros) {
  if (confirm("¿Desea agregar un número aleatorio?")) {
    numerosRandom.push(Math.floor(Math.random() * 99) + 1);
    alert("Se añadió numero con éxito");
    document.write(`<h5 class='display-5 text-center'>Número aleatorio generado ${contador + 1}</h5>`);
    document.write("<div class='d-flex justify-content-center'>");
    document.write(
      `<p class='p-4 m-2 w-25 text-center fs-1 text-bg-primary rounded rounded-4'>${numerosRandom[contador]}</p>`
    );
    document.write("</div>");
    contador++;
  } else {
    agregarNumeros = false;
  }
}
document.write("</section>");
