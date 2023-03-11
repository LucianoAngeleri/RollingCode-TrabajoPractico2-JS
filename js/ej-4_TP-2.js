/*
Ejercicio 4
Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
let numero = "" ;
let total = 0;
do {
    numero = parseFloat(prompt("Ingrese un número"));
    if (isNaN(numero)) {
        alert("No ingresó un numero válido")
    }else{
        total += numero;
    }
    
} while (confirm("Desea continuar añadiendo números?"));
document.write(`<h5 class="display-3 text-center">Resultado</h5>"`);
document.write(`<p class="text-center text-success fs-1">La suma total de los numeros introducidos es: ${total}</p>"`);