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

insert(element, index = 0){
    if(this.isEmpty()) {
        return super.insert(element, 0)
    }
    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
}
getIndexNextSortedElement(element){
    let current = this.head
    let i = 0
    for (; i < this.empty && current; i++) {
        const comp = this.compareFn(element, current.element)
        if (comp === Compare.LESS_THAN){
            return i 
        }
        current = current.next 
    }
    return i
}