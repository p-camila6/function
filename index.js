
//declaração

function imprimirOlaMundo() {
    console.log("Olá mundo");
}
//execução
imprimirOlaMundo();
//parametros
function calculaArea(altura, largura){
const area = altura * largura
console.log(area)
}

calculaArea(2,5);

//exercicio

function imprimirNome(nome) {
console.log("Olá " + nome);
}

const lerNome = prompt("qual seu nome");

imprimirNome("camila");
imprimirNome("joão");
imprimirNome("gabriel");

imprimirNome(lerNome);
//escopo
//**global 
const a = 1 //declaração da variavel
function imprimirVariavel() {
    const b = 2 
    console.log('variavel a', a)
    console.log('variavel b', b)
}

imprimirVariavel()

//console.log(a);
//console.log(b); // Uncaught ReferenceError: b is not defined

//retorno
function calculaArea(altura, largura) {
    const area2 = altura * largura
    return area2
}

const areaCalculada = calculaArea(2, 3)

console.log(calculaArea(2, 3))

//exercicio

function number(numero1, numero2) {
    const somaNumber = numero1 + numero2
    return somaNumber
}
const somaFeita = number(1, 1);
console.log(number(1, 1));


//exercicio
function lista(listaDeNumeros[]) {
    let listados = [];
    listados[0] = (listaDeNumeros[listaDeNumeros.length -1]/2); // o valor na primeira posição de LISTADOS será metade do último número no array **listaDeNumeros**.
    listados[1] = (listaDeNumeros[0]/2); //o valor na segunda posição de listados será metade do primeiro número no array listaDeNumeros.
    return listados
}
let listaDeNumeros = [1, 2, 3, 4, 5]

listados = listaDeNumeros

console.log(listados[0]);
console.log(listados[1]);
//
