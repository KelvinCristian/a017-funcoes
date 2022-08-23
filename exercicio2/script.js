// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const soma = function (num1, num2) {
    return num1 + num2
   
}
console.log(soma(9, 7))


// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const boolean = function (num1, num2) {
    return num1 >= num2
}
   
console.log(boolean(9, 7))

// c) Uma função que receba um número e imprima se ele é par ou não

const parOuNao = function (num1){
    return num1 %2 === 0
}
console.log(parOuNao(2))


// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function frase(nome) {
    console.log(nome.length)
        console.log(nome.toUpperCase())
    
}
frase("kelvin")