// Part 1

const n = 3;
let symbol = '';

console.log('Part 1');
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        symbol += '*';
    }
    console.log(symbol);
    symbol = '';
}

// Part 2

const n2 = 5;
let symbol2 = '';

console.log('\nPart 2');
for (let i = 1; i <= n2; i++) {
    for (let j = 0; j < i; j++) {
        symbol2 += '*';
    }
    console.log(symbol2);
    symbol2 = '';
}

// Part 3

const n3 = 5;
let symbol3 = '';

console.log('\nPart 3');
let helper = 5;
for (let i = 0; i < n3; i++) {
    for (let j = 1; j <= n3; j++) {
        if (j >= helper) {
            symbol3 += '*';
        } else {
            symbol3 += ' ';
        }
    }
    helper--;
    console.log(symbol3);
    symbol3 = '';
}

// Part 4

const n4 = 5;
let symbol4 = '';

console.log('\nPart 4');

if (n4 % 2 != 0) {
    let right = (n4 / 2) - 0.5;
    let middle = 1;
    let left = n4 - right;
    for (let i = 0; i < (n4 / 2) + 0.5; i++) {
        for (let j = 0; j < left; j++) {
            symbol4 += ' ';
        }
        for (let j = 0; j < middle; j++) {
            symbol4 += '*';
        }
        for (let j = 0; j < right; j++) {
            symbol4 += ' ';
        }
        left--;
        right--;
        middle += 2;
        console.log(symbol4);
        symbol4 = '';
    } 
} else {
    console.log('O número escolhido precisa ser ímpar pra fazer a pirâmide certa.');
}