let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Part 1

console.log('Part 1');
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// Part 2

console.log('\nPart 2');
let maxNumber = 0;
for (let i = 0; i < numbers.length; i += 1) {
    maxNumber += numbers[i];
}
console.log(maxNumber);

// Part 3

console.log('\nPart 3');
console.log(maxNumber/numbers.length);

// Part 4

console.log('\nPart 4');
if (maxNumber/numbers.length > 20) {
    console.log('Número maior que 20');
} else {
    console.log('Número menor que 20');
}

// Part 5

console.log('\nPart 5');
let bigN = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > bigN) {
        bigN = numbers[i];
    }    
}
console.log(bigN);

// Part 6

console.log('\nPart 6');
let impar = 0;
for (let i = 0; i <numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        impar++;
    }
}
if (impar > 0) {
    console.log(`Exite ${impar} número ímpares`);
} else {
    console.log('Nenhum valor ímpar encontrado');
}

// Part 7

console.log('\nPart 7');
bigN = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > bigN) {
        bigN = numbers[i];
    }   
}
smallN = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < bigN) {
        bigN = numbers[i];
        smallN = numbers[i];
    } 
}
console.log(smallN);

// Part 8

console.log('\nPart 8');
let arrayNumber = [];
for (let i = 1; i < 26; i++) {
    arrayNumber.push(i);
}
console.log(arrayNumber);


// Part 9

console.log('\nPart 9');
for (let i = 0; i < arrayNumber.length; i++) {
    console.log(arrayNumber[i] / 2);
}
