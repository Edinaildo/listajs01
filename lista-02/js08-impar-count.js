/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 * 
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 * 
 * SAIDA
 * 4 3
 */

// Entrada
var entrada = [1,2,3,4,5,6,7]
let impares = [];
let pares = [];


// processamento
for (i of entrada) {
    if (i % 2 == 0) {
      pares.push(i);
    } else {
      impares.push(i);
    }
  }
  var impar = impares.length,
  par = pares.length;

//saida

console.log(`${impares} ${pares}`)
