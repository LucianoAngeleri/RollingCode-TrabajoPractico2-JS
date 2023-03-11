/*
Ejercicio 6
Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
*/
document.write("<h5 class='display-5 text-center'>Resultado</h5>")
for (let filas = 1; filas <= 30 ; filas++) {
    document.write("<p class='px-5 fs-5 text-primary'>")
    for (let columnas = 1; columnas < filas; columnas++) {
        document.write(`${filas}`)
    }
    document.write(`${filas}`)
    document.write("</p>");
}