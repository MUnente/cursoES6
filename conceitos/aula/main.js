/*AULA DE CLASSES
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Murilo';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Matematica{
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));
*/


/*AULA DE CONST E LET
// CONST
const usuario = {nome: 'Murilo'};

usuario.nome = 'Cleiton';

console.log(usuario);

// LET
function teste(x){
    let y = 2;

    if(x > 5){
        y = 4;
        console.log(x, y);
    }
}

teste(10);
*/


/*OPERAÇÕES COM VETORES
const arr = [1, 3, 4, 5, 8, 10];

// Map: percorre o vetor e retorna uma nova informação
const newArr = arr.map(function(item, index){
    return item * index;
});

console.log(newArr);

// Reduce: consome o vetor e transforma em uma única informação (geralmente um número)
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

// Filter: precisa retornar sempre um booleano
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

// Find: utilizado pra verificar se um elemento existe dentro do array
const find = arr.find(function(item){
    return item === 4;
});

console.log(find);
*/


/*ARROW FUNCTIONS
const arr = [1, 3, 4, 5, 6];

// const newArr = arr.map(function(item){
//     return item * 2;
// });

// Funções anônimas são excelentes para fazer isso, pois não possuem nomes
// para serem chamadas (retire a chamada 'function' e adicione '=>').

// const newArr = arr.map((item) => {
//     return item * 2;
// });

// Quando elas possuem apenas um único parâmetro, é possível retirar 
// os parentêses por volta deles.

// const newArr = arr.map(item => {
//     return item * 2;
// });

// Quando elas retornam uma única informação, pode colocar o retorno logo após
// a flecha sem as chaves.

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({nome: 'Murilo'});

console.log(teste());
*/


/*DESESTRUTURAÇÃO
const usuario = {
    nome: 'Murilo',
    idade: 17,
    endereco: {
        cidade: 'Capivari',
        estado: 'SP'
    }
};

// const nome = usuario.nome, idade = usuario.idade, cidade = usuario.endereco.cidade;

const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraUser({nome, idade, endereco:{estado}}){
    console.log(nome, idade, estado);
}

mostraUser(usuario);
*/


/*OPERADORES REST E SPREAD
// Rest

const usuario = {
    nome: 'Murilo',
    idade: 17,
    empresa: 'IMarket'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4, 5, 6, 7, 8));

// Spread

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const user1 = {
    nome: 'Murilo',
    idade: 17,
    empresa: 'IMarket'
};

const user2 = {...user1, nome: 'Gabriel'};

console.log(user2);
*/


/*TEMPLATE LITERALS

const nome = 'Murilo';
const idade = 17;

// console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
*/


/*OBJECT SHORT SYNTAX*/
const nome = 'Murilo', idade = 17;
const user = {
    nome, idade, empresa: 'IMarket'
};
console.log(user);