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
for (let filas = 1; filas <= 30 ; filas++) {
    for (let columnas = 1; columnas < filas; columnas++) {
        document.write(`${filas}`)
    }
    document.write(`${filas}`)
    document.write(`<br>`)
}