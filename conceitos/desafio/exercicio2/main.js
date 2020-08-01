const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 - UTILIZANDO O MAP

const map = usuarios.map(item => {
    return item.idade;
});

console.log(map);

// 2.2 - UTILIZANDO O FILTER

const filter = usuarios.filter(item => {
    return item.idade > 18 && item.empresa === 'Rocketseat';
});

console.log(filter);

// 2.3 - UTILIZANDO O FIND

const find = usuarios.find(item => {
    return item.empresa === 'Google';
});

console.log(find);

// 2.4 - UNINDO OPERADORES

const mapUniao = usuarios.map(item => {
    let multiplicaIdade = item.idade * 2;
    item.idade = multiplicaIdade;
});

const filterUniao = usuarios.filter(item => {
    return item.idade <= 50;
});

console.log(filterUniao);