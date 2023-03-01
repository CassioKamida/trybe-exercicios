// // let pizza1 = '4 Queijos';
// // let pizza2 = 'Frango com Catupiry';
// // let pizza3 = 'Marguerita';
// // let pizza4 = 'Palmito';
// // let pizza5 = 'Chocolate';

// let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];

// // pizzas[5] = 'Peito de Peru'; adiciona o Peito de Peru na posição de numero 5 do Array, lembrando que Array começa com 0

// pizzas.push('Peito de Peru'); // adiciona o Peito de peru COMO ULTIMO lugar do Array.

// // pizzas.length este comando conta quantos tem dentro de um Array

// pizzas.push('brigadeiro')
// let indexpizzas = pizzas.indexOf('Chocolate'); // comando "indexOf" ajuda a reconhecer em qual posição do Array está localizado o que você colocar dentro do parenteses, no caso eu coloquei o Chocolate, então, no final, deverá dar o resultado de numero 4, afinal Chocolate está na quarta posição do Array.
// console.log(indexpizzas);

// for (let index = 0; index < pizzas.length; index += 1){
//     console.log (pizzas[index]);

// }

// -------------------------------------- PARTE 2 DA AULA -> FOR -------------------------------------------------------------//

// let nomes = ['Paula', 'Roberto', 'Amanda', 'Cleide','Daniel', 'Rods', 'Rogegio'];

// nomes.push('Cassio Kamida');

// for (let indice = 0; indice < nomes.length ; indice += 1){
//     console.log('Boa tarde, ' + nomes[indice])
// }


// -------------------------------------- EXERCICIOS ------------------------------//

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let media;
// let soma = 0;
// let maiorNum = 0
// let verificador = 0;

// for (let index = 0; index < numbers.length; index += 1 ){
    // console.log(numbers[index]);

    // soma = numbers[index] + soma;
    // console.log(soma);
    // if (numbers[index] > maiorNum){
    //     maiorNum = numbers[index];
    // }

    // if ((numbers[index]%2) != 0 ){
    //     verificador = verificador + 1; // ou verificador += 1
    // }


//}
// console.log('temos ' + verificador + ' Números impares')

// console.log(maiorNum);

// media = soma / numbers.length;
// console.log('media ' + media);

//  --------------------------- PRÓXIMO EXERCICIO -----------------//

// let fatorial = 1;
// let index;
// let arrayy = []

// for (index=11; index>0; index=index-1 ){
//     // arrayy.push(index);
//     // console.log(arrayy[index]);
//     fatorial *= index;
// }

// console.log(fatorial);

// ------------------------ PRÓXIMO EXERCICIO ---------------//

let word = 'tryber';
let reverse = '';

for (let index = 0; index < word.length; index += 1){
    reverse += word[word.length - 1 - index];
}
console.log(reverse);