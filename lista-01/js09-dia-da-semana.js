/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 *
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = 4;

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
if (entrada == 1) {
  console.log("Domingo");
} else if (entrada == 2) {
  console.log("Segunda");
} else if (entrada == 3) {
  console.log("Terça");
} else if (entrada == 4) {
  console.log("Quarta");
} else if (entrada == 5) {
  console.log("Quinta");
} else if (entrada == 6) {
  console.log("Sexta");
} else if (entrada == 7) {
  console.log("Sábado");
} else {
  console.log("Entrada Inválida");
}
