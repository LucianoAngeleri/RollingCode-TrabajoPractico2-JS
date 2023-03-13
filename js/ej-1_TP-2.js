/*
 Escribir un programa que solicite la edad y si es mayor de 18 años 
 mostrar un mensaje que ya puede conducir, 
 si la edad ingresada no es un número válido indicarlo en un mensaje.
*/
let edad;
do {
    edad = parseInt(prompt("Ingrese su edad:"));
    if (isNaN(edad)) {
        alert(`El valor ingresado es inválido, ingrese un número válido`);
    }else if(edad == ""){
        alert(`No ingresó ningún valor, ingrese un número válido`);
    }else{
        if ( edad >= 18){
            document.write(`<p class="text-center fs-2 text-success">Su edad es ${edad}, PUEDE conducir.</p>`);
            break
        }else{
            document.write(`<p class="text-center fs-2 text-danger">Su edad es ${edad}, NO PUEDE conducir.</p>`);
            break
        }
    }
} while (true);


