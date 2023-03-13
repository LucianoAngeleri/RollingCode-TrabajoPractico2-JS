/*
Ejercicio 9
Crea un script que escriba los números del 1 al 500, que indique cuáles 
son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
 Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/
document.write("<h5 class='display-5 text-center'>Resultado</h5>");
document.write("<section class='container'>")
for (let linea = 1; linea <= 500; linea++) {
    document.write(`<p class='px-5 fs-5 text-primary'>${linea}`)
    if (linea % 4 === 0) {
        document.write(" - (Múltiplo de 4)")
    }
    if (linea % 9 === 0) {
        document.write(" - (Múltiplo de 9)")
    }
    document.write("</p>")
    if (linea % 5 === 0) {
        document.write("<hr>")
    }
}
document.write("</section>")

