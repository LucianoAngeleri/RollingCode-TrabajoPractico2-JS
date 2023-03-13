/*
Ejercicio 14
Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, 
si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

let resultadoFrase = "";
let frase = prompt("Ingrese una frase:");
console.log(frase)
if (frase === "" || frase === null) {
    document.write("<section class='container'>");
    document.write(`<h5 class='display-5 text-center text-danger'>No ha ingresado ninguna frase</h5>`);
    document.write("</section>");
}else{
    document.write("<section class='container'>");
    document.write(`<h5 class='display-5 text-center'>Resultado</h5>`);
    for(let i = 0; i < frase.length ; i++ ){
        resultadoFrase += frase.substring(i, i+1) + "-"
    }
    resultadoFrase = resultadoFrase.substring(0,resultadoFrase.length-1)
    document.write(`<p class='p-4 m-2 text-center fs-1 text-bg-primary rounded rounded-4'>${resultadoFrase}</p>`);
    document.write("</section>");
}