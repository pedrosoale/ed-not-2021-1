/*
    1. Identifique o algoritmo abaixo.
    2. Comente o que faz cada uma das linhas.
    3. Introduza a função de comparação e faça os ajustes necessários para o
       respectivo funcionamento.
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/

let trocas, pass, comps

const a = (b, fnComp) => {

    trocas = 0, pass = 0, comps = 0

    const c = (d, e) => {
        let f = e
        for(let g = e + 1; g < d.length; g++) {
            if(d[g] < d[f]) f = g
            comps++
        }
        return f
    }
    for(let h = 0; h < b.length - 1; h++) {
        pass++
        let i = c(b, h + 1)
        if(b[h] > b[i]) {
            [b[h], b[i]] = [b[i], b[h]]
            trocas++
        }
        comps++
    }
}

//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log('Antes: ', nums)
a(nums)
console.log('Depois: ', nums)
console.log({trocas, pass, comps})

import { candidatos } from './includes/candidatos-2018.mjs'

// Ordenação por SG_UE, depois por NR_CANDIDATO
a(candidatos, (a, b) => {
    if(a.SG_UE === b.SG_UE) { // empate na UF
        //desempate no número do candidato
        return a.NR_CANDIDATO > b.NR_CANDIDATO
    }
    // UF diferentes, diferencia por UF
    else return a.SG_UE > b.SG_UE
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS: ', candidatos)
console.log({trocas, pass, comps, memoria})