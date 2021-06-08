import { DoublyLinkedList } from './lib/DoublyLinkedList.mjs'

//const lista = new DoublyLinkedList()
//console.log(lista.print())
/*
lista.insert(0, 13)  // Primeiro nodo (lista vazia)
console.log(lista.print())
console.log(lista.printReverse())
*/
function listaOrd(val) {
    const lista = new DoublyLinkedList()
    let num = val
    let nums = ''

    if(lista.empty) {
        nums = lista.insert(num)
    }
    return nums
}

console.log(listaOrd(8))
