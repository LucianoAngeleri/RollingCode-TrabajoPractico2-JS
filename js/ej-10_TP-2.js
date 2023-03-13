/*
Ejercicio 10
Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
const filasIngresadas = parseInt(prompt("Ingrese la cantidad de filas"))
const columnasIngresadas = parseInt(prompt("Ingrese la cantidad de columnas"))
let valorCelda = filasIngresadas * columnasIngresadas;
if (isNaN(filasIngresadas) || isNaN(columnasIngresadas) || filasIngresadas <= 0 || columnasIngresadas <= 0) {
    document.write("<h5 class='display-5 text-danger text-center'>Ingresó un número inválido</h5>");
}else{
    document.write("<h5 class='display-5 text-center'>Resultado</h5>");
    document.write("<section class='container'>")
    document.write('<table class="table table-striped table-bordered">')
    document.write('<tbody>')
    for (let filasTabla = filasIngresadas; filasTabla >= 1; filasTabla--) {
        document.write('<tr>')
        for (let columnasTabla = columnasIngresadas; columnasTabla >= 1; columnasTabla--) {
            document.write('<td>')            
            document.write(`${(valorCelda)}`)            
            document.write('</td>')
            valorCelda--;     
        }
        document.write('</tr>')      
    }
    document.write('</tbody>')
    document.write('</table>')
    document.write("</section>")
    }