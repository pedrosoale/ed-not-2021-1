const texto = 'Socorram-me, subi no ônibus em Marrocos'

const pilha = []

// Empilhamento
for(let i = 0; i < texto.length; i++){
    pilha.push(texto.charAt(i))
}
console.log(pilha)

// Inserindo alguns caracteres no MEIO da pilha (PROIBIDO!)
//pilha.splice(16, 0, 'b', 'a', 't', 'a', 't', 'a')

let textoRev = ''

// Desempilhamento
while(pilha.length){
    textoRev += pilha.pop()
}
console.log(textoRev)