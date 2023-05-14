"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las siguientes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda
if (texto1 > texto2){
    alert('El texto1 es alfabeticamente mayor al texto 2');
} else {
    alert('El texto2 es alfabeticamente mayor al texto 1');
}

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda
if (copiaTexto1 === texto1){
    alert('copiaTexto1 es igual a texto1');
}
// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda
if (copiaTexto1 !== texto2){
    alert('copiaTexto1 es distinto a texto2');
} else {
    alert('Los textos son iguales');
}