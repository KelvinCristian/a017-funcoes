// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

const soma = (num1) => {
    return num1 + Number(prompt("Digite um numero para ser somado"))
}
 const resultado1 = soma(5)
 console.log(resultado1);

const subtracao = (num1) => {
    return num1 - Number(prompt("Digite um numero para ser subitraido"))
}
const resultado2 = subtracao(5)
console.log(resultado2);

const divisao = (num1) => {
    return num1 / Number(prompt("Digite um numero para ser dividido"))
}
const resultado3 = divisao(10)
console.log(resultado3);

const multiplicacao = (num1) => {
    return num1 * Number(prompt("Digite um numero para ser multiplicado"))
}
const resultado4 = multiplicacao(5)
console.log(resultado4)



// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações
