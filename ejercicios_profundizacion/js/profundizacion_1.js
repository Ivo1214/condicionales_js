"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.

let nro1 = parseInt(prompt('Ingrese el primer numero'));
let nro2 = parseInt(prompt('Ingrese el segundo numero'));

let resta = nro1 - nro2;

if (resta === 0) {
    alert('El resultado es cero');
} else if (resta > 0){
    alert('El resultado es positivo');
} else {
    alert('El resultado es negativo');
}