// Definimos las variables
var nombre = prompt("Ingresa su nombre:")
var apellido = prompt("Ingres su apellido:")
var carrera = prompt("Ingresa su carrera:")

// Variable ramos
var ramo1 = prompt("Ingresa el primer ramo:")
var ramo2 = prompt("Ingresa el segundo ramo:")
var ramo3 = prompt("Ingresa el tercer ramo:")

// Variable notas
var n1_1 = prompt("Ingrese nota 1 de " + ramo1 + "")
var n2_1 = prompt("Ingrese nota 2 de " + ramo1 + "")
var n3_1 = prompt("Ingrese nota 3 de " + ramo1 + "")

var n1_2 = prompt("Ingrese nota 1 de " + ramo2 + "")
var n2_2 = prompt("Ingrese nota 2 de " + ramo2 + "")
var n3_2 = prompt("Ingrese nota 3 de " + ramo2 + "")

var n1_3 = prompt("Ingrese nota 1 de " + ramo3 + "")
var n2_3 = prompt("Ingrese nota 2 de " + ramo3 + "")

// Variables de promedio
var n1_1 = parseInt(n1_1)
var n2_1 = parseInt(n2_1)
var n3_1 = parseInt(n3_1)
var promedio_1 = (n1_1 + n2_1 + n3_1) / 3;
console.log(n1_1, n2_1, n3_1)

var n1_2 = parseInt(n1_2)
var n2_2 = parseInt(n2_2)
var n3_2 = parseInt(n3_2)
var promedio_2 = (n1_2 + n2_2 + n3_2) / 3;

var n1_3 = parseFloat(n1_3)
var n2_3 = parseFloat(n2_3)
var n3_3 = parseFloat(120 - (n1_3 + n2_3))



// divs contenedor
document.write("<div class='container'>");
document.write("<h1>Notas finales</h1>");
document.write("<p>Nombre: " + nombre + " " + apellido + "</p>");
document.write("<p>Carrera: " + carrera + "</p>");


// Creamos la tabla bootstrap
document.write("<table class='table'>")

// Encabezado de la tablaJM
document.write("<thead class='bg-dark text-white'>")

// TR definimos las columnas de la tabla
document.write("<tr>")

// Datos de la columna 
document.write("<th scope='col'>Ramo</th>")
document.write("<th scope='col'>Nota 1</th>")
document.write("<th scope='col'>Nota 2</th>")
document.write("<th scope='col'>Nota 3</th>")
document.write("<th scope='col'>Promedio</th>")

document.write("</tr>")
    // TR cierre de los encabezados de la columna

document.write("</thead>")
    // Aquí cerramos el encabezado de nuestra tabla

// Cuerpo del contenido 
document.write("<tbody>")

document.write("<tr>")
document.write("<th scope='row'>" + ramo1 + "</th>")
document.write("<td>" + n1_1 + "</td>")
document.write("<td>" + n2_1 + "</td>")
document.write("<td>" + n3_1 + "</td>")
document.write("<td>" + promedio_1 + "</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<th scope='row'>" + ramo2 + "</th>")
document.write("<td>" + n1_2 + "</td>")
document.write("<td>" + n2_2 + "</td>")
document.write("<td>" + n3_2 + "</td>")
document.write("<td>" + promedio_2 + "</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<th scope='row'>" + ramo3 + "</th>")
document.write("<td>" + n1_3 + "</td>")
document.write("<td>" + n2_3 + "</td>")
document.write("<td> - </td>")
document.write("<td> - </td>")
document.write("</tr>")


document.write("</tbody>")
    // Cerramos el body de la tabla

document.write("</table>");
// Aquí cerramos el cuerpo con el contenido de la tabla según la columna

// Que nota se necesita
document.write("<p>Para aprobar el ramo " + ramo3 + " con nota 4, necesitas obtener un " + n3_3 + " en la nota 3</p>");

document.write("</div>")
    // Cerramos div contenedor