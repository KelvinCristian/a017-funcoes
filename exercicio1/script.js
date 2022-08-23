
// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function nome (){
//     console.log("olá, kelvin")
// }

// nome()



// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

function numero() {
    let numero = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i in numero) {
        console.log(6 * i);
    }
}numero()



// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const nome = () => {
    console.log("olá, kelvin")  
}
nome ()

let numero = () => {
    let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    for (let i in numero) {
      console.log(6 * i);
    }
  }
  numero();