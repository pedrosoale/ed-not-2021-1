function buscaSequencial(vetor, fnComp) {
    for(let i = 0; i < vetor.length; i++) {
        // Em vez de fazer a comparação dentro da função de busca,
        // "terceirizamos" essa comparação chamando uma função externa
        if(fnComp(vetor[i])) return i // Retorna a posição onde foi encontrado
    }
    return -1   // Valor de busca não encontrado
}

/*function comparaNome(objNome, valorBusca) {
    return objNome.first_name === valorBusca
}*/

//const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca
//const comparaNome = (objNome, valorBusca) => objNome.group_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

//console.log(buscaSequencial(objNomes, 'FAUSTO', comparaNome))

console.time('Buscando ZOZIMO')
console.log(buscaSequencial(objNomes, obj => obj.first_name === 'ZOZIMO'))
console.timeEnd('Buscando ZOZIMO')
