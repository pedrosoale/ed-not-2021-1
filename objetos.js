// Objetos são estruturas que permitem armazenar valores
// em um amesma variável, permitindo acessá-los por meio de um nome

// criação de um objeto vazio
let vazio1 = {}                     // forma moderna
let vavzio2 = new Object()          // forma tradicional

// criando um objeto já com dados
let pessoa = {
    // os dados são armazenados no formato
    // propriedade: valor
    // ou também chamado de 
    // atributo: valor
    nome: 'Orkutilson de Oliveira',
    sexo: 'M',
    dataNasc: '2008-04-19',
    ocupacao: 'estudante',
    // Nome da propriedade pode ter espaços ou acento
    // nesse caso, o nome da propriedade precisa estar entre aspas
    'cidade de origem': 'Franca/SP'
    //gostos: ['jogos', 'dormir', 'doces']
    
}
console.log(pessoa)
console.table(pessoa)

// exibindo apenas o valor de uma propriedade
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
// quando o nome da propriedade tem espaços ou acentos, não é posívvel usar a sintaxe de ponto.
// é necessário usar a sintaxe de colchetes
console.log(pessoa['cidade de origem'])
console.log(pessoa.gostos)

// a sintaxe dos colchetes SEMPRE funciona, mesmo se o nome da propriedade for uma única palavra sem acento
console.log(pessoa['nome'])

// outra consequencia da sintaxe dos colchetes é a possibilidade de usar nomes de propriedades que estão dentro de variáveis
let x = 'sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

// criando uma nova propriedade para um objeto já existente
// basta atribuir um valor a um nome de propriedade ainda não existente
pessoa.email = 'orkutilson@gmail.com'
pessoa.celular = '(16) 98765-4321'
console.table(pessoa)

// criando um objeto vazio e só depois adicionando propriedades
let carro = {}
carro.marca = 'volkswagem'
carro.modelo = 'Kombi'
carro.ano = 1971
carro['combustível'] = 'gasolina'
carro.cor = 'bege'

console.table(carro)
