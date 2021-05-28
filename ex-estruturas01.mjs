    /*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import {Stack} from './lib/Stack2.mjs'

function decimalParaBinario(numDecimal) {
    const pilha = new Stack()
    let num = numDecimal
    let resto
    let textoRev = ''
    // Enquanto o resultado da divisão de num por 2 não for igual a zero, obtemos o resto desta divisão.
    while (num > 0) {       
        resto = Math.floor(num % 2)     // Obtém o resto da divisão de num por 2.
        pilha.push(resto)               // faz o push do resto da divisão na pilha.
        num = Math.floor(num / 2)       // obtém o novo num que deverá ser dividido por 2.
    }

    // enquanto a pilha não estiver vazia fazemos pop de seus elementos e concatenamos na string textoRev. 
    while (!pilha.empty) {      
        textoRev += pilha.pop().toString()
    }
    return textoRev
}

console.log(decimalParaBinario(10))
console.log(decimalParaBinario(233))
console.log(decimalParaBinario(1000))
