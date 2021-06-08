/*
    Implemente um programa que receba números em ordem aleatória, mas os
    insira em ordem crescente em uma lista encadeada. Os números devem ser
    adicionados à lista um por vez.

    Por exemplo, inserir o número 25, a lista fica ( 25 )
    Na sequência, insira o número 14, a lista fica ( 14, 25 )
    Insira o número 19, a lista fica (14, 19, 25)
    Insira o número 3, a lista fica (3, 14, 19, 25)

    A cada inserção, o programa deve determinar a posição correta de inserção
    para manter a lista em ordem.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { LinkedList } from './lib/LinkedList.mjs'

const lista = new LinkedList()

function listaOrd(num) {
    if(lista.empty) {                               // Verifica se a lista está vazia
        lista.insertHead(num)                       // Inserir num no início da lista se estiver vazia
    }
    else {                                          // Se a lista não estiver vazia
        for(let i = 0; i < lista.count; i++) {      // Percorre a lista
            let valPos = lista.peek(i)
            if(valPos > num) {                      // Compara num com os valores nas posições para inserir na lista
                lista.insert(i, num)
                return
            }
        }
        lista.insertTail(num)   // Insere num no final da lista se não tem valor maior na lista
    }
}

listaOrd(25)
console.log(lista.print())

listaOrd(14)
console.log(lista.print())

listaOrd(19)
console.log(lista.print())

listaOrd(3)
console.log(lista.print())