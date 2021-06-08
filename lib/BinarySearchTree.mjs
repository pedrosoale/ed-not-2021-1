/*
    ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA
    - Árvore ~> é uma estrutura de dados não-linear, hierárquica,
      que é formada recursivamente por outras subárvores.
    - Árvore binária ~> uma árvore na qual cada nodo tem grau máximo
      igual a 2 (ou seja, cada nodo pode ter, no máximo, dois descendentes
      diretos).
    - Árvore binária de busca ~> é uma árvore binária otimizada para a
      operação de busca binária. Por isso, na inserção, os valores são 
      colocados já em ordem.
*/

class Node {
    constructor(val) {
        this.data = val
        this.left = null        // Ponteiro para subárvore à esquerda
        this.right = null       // Ponteiro para subárvore à direita
    }
}

export class BinarySearchTree {

    #root           // Raiz da árvore

    constructor() {
        this.#root = null
        console.log(this.#root)
    }

    insert(val) {

        const node = new Node(val)

        // 1º caso: árvore vazia
        if(this.#root === null) this.#root = node

        // 2º caso: inserção recursiva ~> percorre a árvore recursivamente
        // para encontrar a posição do novo nodo
        else this.#insertNode(node, this.#root)

        console.log(this.#root)
    }

    // Parâmetros:
    // node ~> nodo a ser inserido
    // root ~> a raiz da subárvore onde será feita a inserção
    #insertNode(node, root) {
        //1° caso: valor do nodo é menor que o valor da raiz ~> para a esquerda
        if(node.data < root.data) {
            // verifica se o nodo à esquerda da rais está desocupado
            // e, se for o caso, insere aí o nodo
            if(root.left === null) root.left = node
            // caso o nodo à esquerda da raiz já exista, reiniciamos
            // o processo considerando este como raiz da subárvore
            else this.#insertNode(node, root.left)
        }
        // 2° caso: valor do nodo é maior que o valor da raiz ~> vai para a direita
        else if(node.data > root.data) {
            // Acontece a mesma coisa que no caso anterior, mas do lado direito
            if(root.right === null) root.right = node 
            else this.#insertNode(node, root.right)
        }
        // Note que, se o valor do nodo for igual ao valor da raiz
        // o pedido de inserção é ignorado para evitar valores duplicados na árvore
    }

    /************************************************************************************
     * PERCURSOS
    ************************************************************************************/
    // Percurso em ordem
    // 1º: visita em-ordem a subárvore esquerda
    // 2º: visita a raiz
    // 3º: visita em-ordem a subárvore direita
    // fnCallback: função externa que será chamada toda vez que o percurso
    // passar por um nodo
    inOrderTranversal(fnCallback, root = this.#root) {
        if(root !== null) {
            this.inOrderTranversal(fnCallback, root.left)   // 1º
            fnCallback(root.data)                           // 2º
            this.inOrderTranversal(fnCallback, root.right)  // 3º
        }
    } 

    // Percurso pré-ordem
    // 1º: visita a raiz
    // 2º: visit a pré-ordem da subárvore esquerda
    // 3º: visita pré-ordem da subárvore direita
    // fnCallback: funçãio externa que será chamada toda vez que o percurso
    // passar por um nodo
    preOrderTransversal(fnCallback, root = this.#root) {
        if(root !== null) {
            fnCallback(root.data)                               // 1º
            this.preOrderTransversal(fnCallback, root.left)     // 2º
            this.preOrderTransversal(fnCallback, root.right)    // 3º
        }
    }

    // Percurso pós-ordem
    // 1º: visita pós-ordem a subárvore da esquerda
    // 2º: visit a pós-ordem da subárvore direita
    // 3º: visita a raiz
    // fnCallback: funçãio externa que será chamada toda vez que o percurso
    // passar por um nodo
     postOrderTransversal(fnCallback, root = this.#root) {
        if(root !== null) {
            this.postOrderTransversal(fnCallback, root.left)     // 1º
            this.postOrderTransversal(fnCallback, root.right)    // 2º
            fnCallback(root.data)                                // 3º
        }
    }

}

const arvore = new BinarySearchTree()
arvore.insert(41)
arvore.insert(76)
arvore.insert(19)
arvore.insert(34)
arvore.insert(25)
arvore.insert(88)

let percursoEm = []
arvore.inOrderTranversal(val => percursoEm.push(val))
console.log({percursoEm})

let percursoPre = []
arvore.preOrderTransversal(val => percursoPre.push(val))
console.log({percursoPre})

let percursoPos = []
arvore.postOrderTransversal(val => percursoPos.push(val))
console.log({percursoPos})