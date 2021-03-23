/*
    QUICK SORT

    Escolhe um dos elementos do vetor para ser o pivot (na nossa implementação,
    o último elemento) e, na primeira passada, divide o vetor, a partir da primeira posição
    final do vetor, em um subvetor à esquerda contendo apenas valores menores
    que o pivot, e outro subvetor à direita, que contém apenas valores maiores que o pivot.

    Em seguida, recursivamente repete o processo em cada um dos subvetores até que 
    todo o vetor esteja ordenado.
*/

let trocas, comps, pass

function quickSort(vetor, ini = 0, fim = vetor.length - 1) {
    if(fim > ini){
        pass++
        const pivot = fim
        let div = ini - 1
        // loop for vai até a PENÚLTIMA posição
        for(let i = ini; i < fim; i++){
            if(vetor[i] < vetor[pivot]){
                comps++
                div++
                if(i != div) {
                    [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
                    trocas++
                }
            }
        }
        div++
        // colocamos o pivot no seu lugar definitivo
        if(vetor[pivot] < vetor[div]){
            [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
            trocas++
        }
        comps++

        // Ordena o subvetor à esquerda do pivô
        quickSort(vetor, ini, div - 1)

        // ordena o subvetor à direita do pivot
        quickSort(vetor, div + 1, fim)
    }
}

trocas = 0, comps = 0, pass = 0
let nums = [7, 4, 9, 0, 6, 2, 8, 5, 3, 1]
quickSort(nums)
console.log(nums)
console.log(trocas, comps, pass)

import { nomes } from './includes/100-mil-nomes.mjs'

trocas = 0, comps = 0, pass = 0
console.time('Ordenando nomes...')
quickSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('DEPOIS: ', nomes)
console.log({trocas, pass, comps, memoria})