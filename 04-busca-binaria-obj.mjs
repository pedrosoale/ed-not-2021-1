let comps

function buscaBinaria(vetor, fnComp) {
    comps = 0
    let ini = 0
    let fim = vetor.length -1
    let meio
    while (fim >= ini) {
        meio = Math.floor((fim + ini)/2)
        switch(fnComp(vetor[meio])) {
            case 0: //achou
                comps++
                return meio
            case 1:     // valor de busca é maior
                comps += 2
                ini = meio + 1
                break
            default:    //valor de busca é menor
                comps += 2
                fim = meio - 1
        }
    }
    return -1   //não existe
}

//a função de comparação para a busca binária precisa retornar um de três valores:
//retorno 0: o valor de busca e o valor no objeto são iguais
//retorno -1: o valor de busca é menor que o valor no objeto
//retorno 1: o valor de busca é amior que o valor no objeto


const comparaNome = (obj, busca = "FAUSTO") => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}

import {objNomes} from './includes/vetor-obj-nomes.mjs'


console.time('Buscando ZOZIMO')
console.log(buscaBinaria(objNomes, (obj, busca = "ZOZIMO") => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ZOZIMO')

console.time('Buscando ALEXANDRE')
console.log(buscaBinaria(objNomes, (obj, busca = "ALEXANDRE") => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ALEXANDRE')

console.time('Buscando ZACARIAS')
console.log(buscaBinaria(objNomes, (obj, busca = "ZACARIAS") => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ZACARIAS')

console.time('Buscando MAURICIO')
console.log(buscaBinaria(objNomes, (obj, busca = "MAURICIO") => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando MAURICIO')