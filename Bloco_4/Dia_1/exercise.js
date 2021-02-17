const a = 5;
const b = 10;
const c = 15;

// Part 1

console.log('Part 1:');
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Part 2

console.log('\nPart 2:');
if (a > b) {
    console.log('A variável "a" é a maior');
} else if (b > a) {
    console.log('A variável "b" é a maior');
} else {
    console.log('Não foi identificado uma variável maior que a outra.');
}

// Part 3

console.log('\nPart 3:');
if (a > b) {
    if (a > c) {
        console.log('A variável "a" é a maior');
    } else if (a < c) {
        console.log('A variável "c" é a maior');
    }
} else if (b > a) {
    if (b > c) {
        console.log('A variável "b" é a maior');
    } else if (b < c) {
        console.log('A variável "c" é a maior');
    }
} else {
    console.log('Não foi identificado uma variável maior que a outra.');
}

// Part 4

console.log('\nPart 4:');
if (a > 0) {
    console.log('Positive');
} else if (a < 0) {
    console.log('Negative');
} else {
    console.log('Zero');
}

// Part 5

console.log('\nPart 5:');
const ang1 = 60;
const ang2 = 60;
const ang3 = 60;

if (ang1 + ang2 + ang3 === 180) {
    console.log('True');
} else {
    console.log('False');
}

// Part 6

console.log('\nPart 6:');
const piece = 'King';

if (piece === 'King') {
    console.log('Move-se apenas uma casa para a diagonal, vertical ou horizontal.');
} else if (piece === 'Queen') {
    console.log('Move-se em todas as direções e em quantas quantidades de casa ela quiser.');
} else if (piece === 'Knight') {
    console.log('Move-se em formato de L');
} else if (piece === 'Rook') {
    console.log('Move-se horizontalmente ou verticalmente e em quantas quantidades de casa ela quiser.');
} else if (piece === 'Bishop') {
    console.log('Move-se em diagonais e em quantas quantidades de casa ela quiser.');
} else if (piece === 'Pawn') {
    console.log('Move-se uma casa pra frente ou duas se for no inicio do jogo.');
} else {
    console.log('Não identificamos o nome da peça.');
}

// Part 7

console.log('\nPart 7:');
const nota = 100;

if (nota >= 90) {
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if (nota >= 70) {
    console.log('C');
} else if (nota >= 60) {
    console.log('D');
} else if (nota >= 50) {
    console.log('E');
} else if (nota <= 49) {
    console.log('F');
} else {
    console.log('Não identificamos a nota.');
}

// Part 8

console.log('\nPart 8:');
const num1 = 5;
const num2 = 12;
const num3 = 2;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log('Pelo menos 1 dos itens é par.');
} else {
    console.log('Nem um dos itens é par.');
}

// Part 9

console.log('\nPart 9:');
const num1 = 5;
const num2 = 12;
const num3 = 2;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log('Pelo menos 1 dos itens é ímpar.');
} else {
    console.log('Nem um dos itens é ímpar.');
}

// Part 10

console.log('\nPart 10:');
let custo = 1;
let value = 3;

if (custo >= 0 && saleValue >= 0) {
  let totalCusto = custo * 1.2;
  let totalValor = (value - totalCusto) * 1000;
  console.log(totalValor);
} else {
  console.log("Valor não pode ser negativo");
};

// Part 11

console.log('\nPart 11:');
let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = baseSalary * 0.075 - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = baseSalary * 0.15 - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = baseSalary * 0.225 - 636.13;
} else {
  aliquotIR = baseSalary * 0.275 - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));