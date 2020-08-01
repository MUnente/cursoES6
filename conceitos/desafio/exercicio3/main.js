// 3.1
// const arr = [1, 2, 3, 4, 5];

// arr.map(item => {
//     return item + 10;
// });

// console.log(arr);


// 3.2
// Dica: Utilize uma constante pra function

// const usuario = { nome: 'Diego', idade: 23 };

// const mostraIdade = usuario => {
//     return usuario.idade
// };

// mostraIdade(usuario);


// 3.3
// Dica: Utilize uma constante pra function

// const nome = "Diego";
// const idade = 23;

// const mostraUsuario = (nome = 'Diego', idade = 18) => {
//     return { nome, idade };
// }

// mostraUsuario(nome, idade);
// mostraUsuario(nome);


// 3.4
const promise = () => {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
};
   