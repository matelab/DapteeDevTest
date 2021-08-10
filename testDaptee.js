// Consigna

/*
Armar una clase Ayuda, la cual tenga los siguientes metodos:

	1- Multiplicar 2 numeros, sin utilizar el operador de multiplicacion.
	2- Obtener el numero mayor dentro de un arreglo. Solo iterar 1 vez.
	3- Dado un arreglo, eliminar todos los "undefined", "null", "false" y 0 (no sus valores en string). Iterar solo 1 vez.
	4- Dado un arreglo multidimensional, obtener todos los valores en un nuevo arreglo de una sola dimension. Usar recursividad
		Ejemplo: [1, [2, [3, 4]], 'hola', [1, 'buenos dias']] => [1, 2, 3, 4, 'hola', 1, 'buenos dias']
	5- Dado un string, devolver un objeto/array que indique la palabra que mas veces se repite, y su cantidad.
		Ejemplo: "Este es un string, el cual es un string donde se repite muchas veces la palabra es" => {es: 3} / ['es' => 3]
	6- Verificar si un string es un palíndromo.
	7- Dado 3 numeros, devolver el mayor. Hacer una function, adaptada de la anterior, para que funcione con cualquier cantidad de numeros.

Se pueden usar metodos auxiliares en caso de ser necesario
*/

// Resolución

function Helper() {
    this.multiply = function(x, y) {
        console.log(x / (1 / y));
    }
    
    this.getBiggerNumber = function(arr) {
        console.log(Math.max(...arr));
    }

    this.arrayClean = function(arr) {
        var filtered = arr.filter(Boolean);
        console.log(filtered);
    }

    this.transformArray  = function(arr) {
        
        var newArr = [];

        function recursion(array, length = 0) {    
       
        if (array.length === length) return 0;

        if (Array.isArray(array[length])) {
            recursion(array[length]);
        }
        else          
          newArr.push(array[length]);       
        recursion(array, length + 1);
    }
    console.log(recursion(arr));
    }

    this.countMostRepeatedWord = function(str) {
        let obj = {}, mostFreq = 0, which = [];
        let arr = str.split(" ");
        arr.forEach(i => {
            if (!obj[i]) {
            obj[i] = 1;
            } else {
            obj[i]++;
            }
            if (obj[i] > mostFreq) {
            mostFreq = obj[i];
            which = [i];
            } else if (obj[i] === mostFreq) {
            which.push(i);
            }
        });
        which.push(mostFreq)
        console.log(which);
    }

    this.checkPalindrome = function(str) {
        
            var re = /[\W_]/g;
            var lowRegStr = str.toLowerCase().replace(re, '');
            var reverseStr = lowRegStr.split('').reverse().join(''); 
            console.log("Is palindrome: ", reverseStr === lowRegStr)
    }
     
    this.returnBiggerNumberFromTree = function(x, y, z) {
        console.log(Math.max(x, y, z));
    }

    this.returnBiggerNumber = function(arr) {
       console.log(Math.max.apply(null, arr))
    }
}

// Instanciamos la clase Helper en ayuda
let Ayuda = new Helper();

// Testea el metodo multiply
console.log("ex. 1");
Ayuda.multiply(2, 7);
Ayuda.multiply(-12, -2);
Ayuda.multiply(0.2, -1.7);

// Testea el metodo getBiggerNumber
console.log("ex. 2");
Ayuda.getBiggerNumber([0, -32, -4, -3, -2, -1, -123, -33, -22, -11]);
Ayuda.getBiggerNumber([0, 32, 4, 3, 2, 1, 123, 33, 22, 11]);

// Testea el metodo arrayClean
console.log("ex. 3");
Ayuda.arrayClean([null, undefined, 0, 1, 100, 'pepito', false, true, 1912, null, 1, false, -5, 'Hey!']);

// Testea el metodo transformArray
console.log("ex. 4");
Ayuda.transformArray([[1, 2], 3, [4, 3], [10, 50], [98, 100]]);
Ayuda.transformArray([[1, 2], ['hello', 'world'], [312, true, '2']]);

// Testea el metodo countMostRepeatedWord
console.log("ex. 5");
Ayuda.countMostRepeatedWord('This is a word counter for the count of all the words in a string. As the string grows a counter gets more busy and a bit slower.');

// Testea el metodo checkPalindrome
console.log("ex. 6");
Ayuda.checkPalindrome("Ana lleva al oso la avellana");
Ayuda.checkPalindrome("Se van sus naves");
Ayuda.checkPalindrome("Oraciones seno icaro móncalo");

// Testea el metodo returnBiggerNumberFromTree
console.log("ex. 7a");
Ayuda.returnBiggerNumberFromTree(2, 33, 109);
Ayuda.returnBiggerNumberFromTree(2, 0, -109);

// Testea el metodo returnBiggerNumber
console.log("ex. 7b");
Ayuda.returnBiggerNumber([2, 33, 1901, -8144, 938821, 1010]);
Ayuda.returnBiggerNumber([0, -2, -33, -1901, -8144, -938821, -1010, 11, 2]);
Ayuda.returnBiggerNumber([2]);
Ayuda.returnBiggerNumber([2, 0, 100]);