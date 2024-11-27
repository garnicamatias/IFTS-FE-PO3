
//Ejercicio n°1
function CalcularAreaRectangulo(base, altura) {
    let area = base*altura
    return area;
}

console.log('EJERCICIO 1: Área de un rectángulo')
console.log('')
console.log('Solución 1 (base: 5, altura: 3): ');
console.log(CalcularAreaRectangulo(5,3));

console.log('Solución 2 (base: 1, altura: 2): ');
console.log(CalcularAreaRectangulo(1,2));

console.log('Solución 3: (base: 7, altura: 2) ');
console.log(CalcularAreaRectangulo(7,2));


console.log('')
console.log('/////////////////////////////////')

/* 
Ejercicio 1: En este ejercicio le paso por parámetro a una función 
los valores de la base y la altura de un rectángulo y retorno el producto entre ellos, 
lo cual simplifica el código el hecho de declarar una variable "área" con el producto y luego retornarla.
TODO: Se deberían agregar validaciones a los parámetros ingresados, como por ejemplo, validar que sean números reales no nulos.
*/



//Ejercicio n°2


function contarPalabras(cadena) {
    return cadena.split(' ').length;
}


console.log('EJERCICIO 2: Contar palabras en una cadena')
console.log('')

console.log('Solución 1: (Humahuaca es un lugar copado)')
console.log(contarPalabras("Humahuaca es un lugar copado"));
console.log('Solución 1: (Me gusta el desarrollo de aplicaciones web)')
console.log(contarPalabras("Me gusta el desarrollo de aplicaciones web"));
console.log('Solución 1: (Actualmente vivo en Mar del Plata)')
console.log(contarPalabras("Actualmente vivo en Mar del Plata"));


console.log('')
console.log('/////////////////////////////////')
/*
Ejercicio 2: En este ejercicio le paso por parámetro a una función 
la cadena y retorno la longitud de un array el cual se generó al aplicarle el método split(' ')
a la cadena para cortarla en cada espacio ' '; por lo tanto cada posición del array son las palabras correspondiente de la cadena.
TODO: Se deberían agregar validaciones al parámetro ingresado, como por ejemplo, validar que sea no sea nulo, o que sea una cadena
*/




//Ejercicio n°3

function invertirCadena(cadena) {
    let arrayDeCaracteres = cadena.split('');
    let invertirPosicionesDeArray = arrayDeCaracteres.reverse();
    return invertirPosicionesDeArray.join('');
}


console.log('EJERCICIO 3: Invertir una cadena')
console.log('')

console.log('Solución 1: (hola)')
console.log(invertirCadena("hola"));
console.log('Solución 2: (Humahuaca)')
console.log(invertirCadena("Humahuaca"));
console.log('Solución 3: (Mar del Plata)')
console.log(invertirCadena("Mar del Plata"));


console.log('')
console.log('/////////////////////////////////')
/*
Ejercicio 3: En este ejercicio le paso por parámetro a una función 
la cadena, la cual primero genera un array con las palabras aplicando el método split(' '); luego al array le aplico el método reverse para invertir el orden de los elementos; finalmente con el método join(' ') vuelvo a rearmar la cadena incluyendo un espacio en cada elemento (palabra) del array.
TODO: Se deberían agregar validaciones al parámetro ingresado, como por ejemplo, validar que sea no sea nulo, o que sea una cadena
*/



//Ejercicio n°4

function esPalindromo(cadena) {
    let arrayDeCaracteres = cadena.split('');
    let invertirPosicionesDeArray = arrayDeCaracteres.reverse();
    let cadenaInvertida = invertirPosicionesDeArray.join('');
    return cadena === cadenaInvertida;
}

console.log('EJERCICIO 4: Encontrar el palíndromo')
console.log('')

console.log('Solución 1: (neuquen)')
console.log(esPalindromo("neuquen"));
console.log('Solución 2: (reconocer)')
console.log(esPalindromo("reconocer"));
console.log('Solución 3: (hola)')
console.log(esPalindromo("hola"));


console.log('')
console.log('/////////////////////////////////')
/*
Ejercicio 4: En este ejercicio utilizo una función que tiene la misma estructura que la función anterior, salvo que le retorno una comparación entre la cadena original y la cadena invertida.
Si la cadena original y la invertida son iguales (palíndromo), la función devuelve true; caso contrario, devuelve false
TODO: Se deberían agregar validaciones al parámetro ingresado, como por ejemplo, validar que sea no sea nulo, o que sea una cadena
*/


//Ejercicio n°5

function edadCanina(edad) {
    return console.log('Tu perro tiene ', edad*7, ' años humanos')
}

console.log('EJERCICIO 5: Crear un programa para convertir la edad de un perro a años humanos')
console.log('')

console.log('Solución 1:')
edadCanina(prompt('¿Cuál es la edad de su perro?'))
console.log('Solución 2:')
edadCanina(prompt('¿Cuál es la edad de su perro?'))
console.log('Solución 3:')
edadCanina(prompt('¿Cuál es la edad de su perro?'))


/*
Ejercicio n°5: En este ejercicio, se pasa por parámetro el valor ingresado por un prompt, el cual corresponde a la edad de un perro. La función edadCanina retorna por console.log la cantidad de años humanos del perro, multiplicando por 7 la edad ingresada.
TODO: Se deberían agregar validaciones al parámetro ingresado, como por ejemplo, validar que sea un número entero, mayor a 0 y tal vez menor a cierta cantidad de años.  
*/