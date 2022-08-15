/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA          SAÍDA
 * ENTRADA                   SAÍDA

 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
var entrada = "yes";
var verdadeiro = [
  "y",
  "Yes",
  "YES",
  "yes",
  "y",
  "S",
  "SIM",
  "s",
  "sim",
  "Sim",
  "1",
  "👍",
];
if (verdadeiro.includes(entrada)) {
  console.log(true);
} else {
  console.log(false);
}

// // implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var entrada = "J";

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var resultado = false;

console.log(resultado);

