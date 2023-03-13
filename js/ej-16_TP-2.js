/*
Ejercicio 16
Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
let fraseInvertida = "";
let frase = prompt("Ingrese una frase:");
console.log(frase)
if (frase === "" || frase === null) {
    document.write("<section class='container'>");
    document.write(`<h5 class='display-5 text-center text-danger'>No ha ingresado ninguna frase</h5>`);
    document.write("</section>");
}else{
    document.write("<section class='container'>");
    document.write(`<h5 class='display-5 text-center'>La frase original es: \"${frase}\"</h5>`);
    for(let i = frase.length; i >= 0 ; i-- ){
        fraseInvertida += frase.charAt(i);
    }
    document.write(`<p class='p-4 m-2 text-center fs-1 text-success'>La frase invertida es: \"${fraseInvertida}\"</p>`);
    document.write("</section>");
}