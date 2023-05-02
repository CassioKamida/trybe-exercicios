// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// console.log(info.personagem);

// -----------------------------------------------------//

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// }
// info['recorrentes'] = 'Sim'

// console.log (info);

// ------------------------------------------//

//  let info = {
//    personagem: 'Margarida',
//    origem: 'Pato Donald',
//    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//  }
//  info['recorrentes'] = 'Sim'

//  for (let index in info){
//   console.log(index)
//  }

// ----------------------------------------------------//

//  let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// }
// info['recorrentes'] = 'Sim'

// for (let index in info){
//  console.log(info[index])
// }

// =-------------------------------------------------------//

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrentes: 'Sim'
// }


// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrentes: 'Sim',
// };

// for (let key in info){
//   if (
//     key === 'recorrentes' && info[key] === 'Sim' && info2[key] === 'Sim'
//   ){
//     console.log('ambos recorrentes');
//   }
//  else {
//     console.log(info[key] + ' e ' + info2[key]);
//   }
// }

// -----------------------------------------------------------//

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// console.log('O livro favorito de ' + leitor.nome + leitor.sobrenome +' se chama ' +  leitor.livrosFavoritos[0].titulo)

// leitor.livrosFavoritos.push({
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// },
// )

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')

// ------------------------------------------------------//

// let order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,
//   },
// };

// function customerInfo(order) {
//   return 'Olá ' + order.order.delivery.deliveryPerson + ', entrega para: ' + order.name + ', Telefone:' + order.phoneNumber + ', R.' + order.address.street + ', N' + order.address.number + ', AP' + order.address.apartment;
// }

// console.log(customerInfo(order));

// function orderModifier(order) {
//   let newBuyer = order.name = 'Luiz Silva';
//   let newTotal = order.payment.total = '50';
//   let pizzas = Object.keys(order.order.pizza);
//   let coca = Object.type(order.order.drinks.type);
//   console.log('Olá ' + newBuyer + ', o total do seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + drinks + ' é R$ ' + newTotal + ',00.');

// }

// orderModifier(order);

// --------------------------------------- // 

let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


function addTurnoNoite(obj, key, value ) {
  obj[key]=value;
}
addTurnoNoite(lesson2, 'turno', 'noite')
console.log(lesson2)


function listarKeys(obj){
  return Object.keys(obj);
}
console.log(listarKeys(lesson1));


function mostrarTamanho(obj){
  return Object.keys(obj).length;
}
console.log(mostrarTamanho(lesson1));


function mostrarValores(obj){
  return Object.values(obj);
}
console.log(mostrarValores(lesson1));


let allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});
console.log(allLessons)

