/*
Ejercicio 11
Realiza un script que pida por teclado 3 edades y 3 nombres 
e indique el nombre del mayor. 
*Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/
let edades=[];
let nombres=[];
for (let i = 0; i < 3; i++) {
    edades[i] = parseInt(prompt(`Ingrese la edad ${i+1}:`));
    nombres[i] = prompt(`Ingrese el nombre ${i+1}:`);
}
edadMayor=Math.max(edades[0],edades[1],edades[2])

document.write("<h5 class='display-5 text-center'>Resultado</h5>");
document.write("<section class='container'>")

switch (edadMayor) {
    case edades[0]:
        document.write(`<p class='px-5 fs-2 text-primary'>El de mayor edad es ${nombres[0]}, tiene ${edadMayor} años.</p>`);
        break;
    case edades[1]:
        document.write(`<p class='px-5 fs-2 text-primary'>El de mayor edad es ${nombres[1]}, tiene ${edadMayor} años.</p>`);
        break;
    case edades[2]:
        document.write(`<p class='px-5 fs-2 text-primary'>El de mayor edad es ${nombres[2]}, tiene ${edadMayor} años.</p>`);
        break;
}
document.write("<section class='container'>")
