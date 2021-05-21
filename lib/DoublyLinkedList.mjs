/*
    ESTRUTURA DE DADOS LISTA DUPLAMENTE ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
      de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem três partes: uma, que armazena a
      informação; a segunda que guarda o endereço do nodo anterior; e a
      terceira, que guarda o endereço próximo nodo da sequência
    - A qualquer momento, temos um conhecimento apenas limitado de onde
      se encontram todos os nodos da lista. Sabemos apenas onde está o
      primeiro e o último nodo da sequência. Os nodos intermediários precisam
      ser encontrados partindo-se do primeiro ou do último nodo e percorrendo 
      a sequência
*/

class Node {
    constructor(val) {
        this.data = val         // valor armazenado
        this.prev = null        // ponteiro para o nodo anterior
        this.next = null        // ponteiro para o nodo seguinte
    }
}

export class DoublyLinkedList {

    #head       // primeiro nodo
    #tail       // último nodo
    #count      // quantidade de nodos

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    // Dada um aposição, retorna o nodo naquela posição
    #findNode(pos) {
        let node = null
        // Posição se encontra na primeira metade da lista
        if(pos < this.#count / 2) {
            node = this.#head
            for(let i = 0; i < pos; i++) node = node.next
        }
        // Posição se encontra na segunda metade da lista
        else {
            node = this.#tail
            for(let i = this.#count - 1; i > pos; i--) node = node.prev
        }
        return node
    }

    get empty() {
        return this.#count === 0
    }

    insert(pos, val) {
        
        const node = new Node(val)

        // 1° caso: lista vazia
        if(this.empty) {
            this.#head = node
            this.#tail = node
        }
        // 2° caso: inserção no início da lista
        else if(pos === 0) {
            node.next = this.#head
            this.#head.prev = node
            this.#head = node
        }
        // 3° caso: inserção no final da lista
        else if(pos >= this.#count) {
            this.#tail.next = node
            node.prev = this.#tail
            this.#tail = node
        }
        // 4° caso: inserção em posição intermediária
        else {
            let nodePos = this.#findNode(pos)
            let before = nodePos.prev
            // O nodo anterior à posição passa a apontar para o novo nodo
            before.next = node
            // O novo nodo aponta de volta para o anterior
            node.prev = before
            // O novo nodo passa a apontar para o nodo que ocupava a posição
            node.next = nodePos
            // O antigo nodo da posição aponta de volta para o novo nodo
            nodePos.prev = node 
        }

        this.#count++
    }

    insertHead(val) {
        this.insert(0, val)
    }

    insertTail(val) {
        this.insert(this.#count, val)
    }

    remove(pos) {
        // 1° caso: lista vazia ou posição fora dos limites
        if(this.empty || pos < 0 || pos > this.#count - 1) return undefined

        let removed

        // 2° caso: remoção do início
        if(pos === 0) {
            removed = this.#head
            this.#head = removed.next
            // Se existir um nodo válido como head, ele não terá antecessor
            if(his.#head) this.#head.prev = null

            // Remoção do último nodo: head é null, tail tem que ser também
            if(this.#count === 1) this.#tail = null
        }
        // 3° caso: remoção no final
        else if(pos === this.#count - 1) {
            removed = this.#tail
            this.#tail = removed.prev
            // se existir um nodo válido como tail, ele não terá sucessor
            if(this.#tail) this.#tail.next = null
            // Remoção do último nodo: tail é null, head tem qu ser também
            if(this.#count === 1) this.#head = null
        }
        this.#count--
    }

    print() {
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}]: ${node.data}`
            if(node.next) output += ' <-> '
            node = node.next
        }
        return output + ` ) count: ${this.#count}`
    }

    printReverse() {
        let output = '( '
        let node = this.#tail
        for(let i = this.#count - 1; i >= 0; i--) {
            output += `[${i}]: ${node.data}`
            if(node.prev) output += ' <-> '
            node = node.prev
        }
        return output + ` ) count: ${this.#count}`
    }

}

const lista = new DoublyLinkedList()
console.log(lista.print())

lista.insert(0, 'Odorico')
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(1, 'Gersina')  // inserção no final
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(0, 'Temístocles')  // inserção no início
console.log(lista.print())
console.log(lista.printReverse())
