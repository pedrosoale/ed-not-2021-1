/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deque } from './lib/Deque.mjs'
//import { Deque as Deque2 } from './lib/Deque2.mjs'

function palindromoChecker(aString) {
    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
        return false
    }
    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('')
    let isEqual = true
    let firstChar, lastChar
    for (let i = 0; i < lowerString.length; i++) {
        deque.insertBack(lowerString.charAt(i))
    }
    while (deque.count > 1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if(firstChar !== lastChar) {
            isEqual = false
        }
    }
    return isEqual
}

console.log('Arara', palindromoChecker('Arara'))
console.log('Socorram me subi no onibus em Marrocos', palindromoChecker('Socorram me subi no onibus em Marrocos'))