"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda
if (numero1 === numero2){
    alert('Los numeros son iguales');
} else if (numero1 > numero2){
    alert ('El primer numero es mayor que el segundo')
} else {
    alert('El segundo numero es mayor que el primero');
}

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso
if (numero1 === 0){
    alert ('El primer numero es cero');
} else if (numero1 > 0){
    alert ('El primer numero es positivo');
} else {
    alert ('El primer numero es negativo');
}

// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición
if ((numero1 > 0) && (numero1 < 100)) {
    alert ('El primer numero es mayor a 0 y menor a 100');
} else{
    alert ('El primer numero no es mayor a 0 y menor a 100');
}
// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición
if ((numero1 < 10) || (numero2 > -2)){
    alert('El primer numero es menor a 10 o el segundo numero es mayor a -2');
}else{
    alert('No se cumplio ninguna condicion');
}