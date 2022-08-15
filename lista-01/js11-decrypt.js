/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbdbuf          abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 *
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
var texto = 'bcbdbuf'

// implemente aqui uma lógica para descriptografar o texto
var textoDecripto = '';
for (i of texto){
    if (i === '$'){
        textoDecripto += 'Z';
    } 
    else if (i === '@'){
        textoDecripto += 'z'
    }
    else {
        textoDecripto += String.fromCharCode(i.charCodeAt(0)-1);
    }
}
var texto = "bcbdbuf";

// implemente aqui uma lógica para descriptografar o texto
var textoDecripto = "abacate";


console.log(textoDecripto);
