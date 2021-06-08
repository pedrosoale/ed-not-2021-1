/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deque } from './lib/Deque.mjs'
//import { Deque as Deque2 } from './lib/Deque2.mjs'

// Verifica se o dado inserido é válido
function palindromoChecker(texto) {
    if (texto === undefined || texto === null || (texto !== null && texto.length === 0)) {
        return false
    }
    const deque = new Deque()
    const minusculo = texto.toLocaleLowerCase().split(' ').join('')     // Transforma todas as letras para minúsculas
    let igual = true
    let primLetra, ultLetra
    for (let i = 0; i < minusculo.length; i++) {      // Insere os caracteres da string no deque
        deque.insertBack(minusculo.charAt(i))
    }
    while (deque.count > 1 && igual) {    // Enquanto tiver mais de um caractere 
        primLetra = deque.removeFront()     // Remove um caractere na frente do deque
        ultLetra = deque.removeBack()       // Remove um caractere atrás do deque
        if(primLetra !== ultLetra) {        
            igual = false                 // Para ser um palíndromo os caracteres removidos devem ser iguais
        }
    }
    return igual
}

console.log('Arara', palindromoChecker('Arara'))
console.log('Socorram me subi no onibus em Marrocos', palindromoChecker('Socorram me subi no onibus em Marrocos'))