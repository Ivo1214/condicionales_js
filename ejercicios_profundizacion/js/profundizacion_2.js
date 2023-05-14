"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.

let nro1 = parseInt(prompt('Ingrese el primer numero'));
let nro2 = parseInt(prompt('Ingrese el segundo numero'));
let nro3 = parseInt(prompt('Ingrese el tercer numero'));


// El operador % (MOD) sirve para obtener el resto de una division, en caso que queramos obtener el resultado usaremos el operador / (DIV)
if ((nro1 % 2) == 0){
    alert('El primer numero es par');
} else {
    alert('El primer numero es impar');
}


if ((nro2 % 2) == 0){
    alert('El segundo numero es par');
} else {
    alert('El segundo numero es impar');
}


if ((nro3 % 2) == 0){
    alert('El tercer numero es par');
} else {
    alert('El tercer numero es impar');
}