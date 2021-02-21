// Part 1
function palindrome(stringes) {
    let palavra = stringes;
    let helper = 0;
    for (let i = 1; i <= stringes.length; i++) {
        if (stringes[i - 1] === palavra[palavra.length - i]) {
            helper++;
        }
    }
    if (helper === stringes.length) {
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }
}

console.log('Part 1');

palindrome('arara');
palindrome('desenvolvimento');

// Part 2
function indiceMax(array) {
    let bigN = 0;
    let index;
    for (let i = 1; i <= array.length; i++) {
        if (bigN < array[i]) {
            bigN = array[i];
            index = i;
        }
    }
    console.log(index);
    return index;
}

console.log('\nPart 2');

indiceMax([2, 3, 6, 7, 10, 1]);

// Part 3
function indiceMinus(array) {
    let bigN = 0;
    let index;
    for (let i = 1; i <= array.length; i++) {
        if (bigN < array[i]) {
            bigN = array[i];
        }
    }
    for (let i = 1; i <= array.length; i++) {
        if (array[i] < bigN) {
            bigN = array[i];
            index = i;
        }
    }
    console.log(index);
    return index;
}

console.log('\nPart 3');

indiceMinus([2, 4, 6, 7, 10, 0, -3]);

// Part 4
function bigName(array) {
    let nameBig = array[0];
    for (let i = 1; i < array.length; i++) {
        if (nameBig.length < array.length) {
            nameBig = array[i];
        }
    }
    console.log(nameBig);
    return nameBig;
}

console.log('\nPart 4');

bigName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

// Part 5
function repetir(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
            contNumero++;
        }
        }
        if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    console.log(numeros[indexNumeroRepetido]);
    return numeros[indexNumeroRepetido];
}

console.log('\nPart 5');

repetir([2, 3, 2, 5, 8, 2, 3]);

// Part 6
function somation(number) {
    let ok = 0;
    for (let i = 1; i <= number; i++) {
        ok += i;
    }
    console.log(ok);
    return ok;
}

console.log('\nPart 6');

somation(5);

// Part 7
function comparation(string1, string2) {
    let helper = 0;
    let palavra1 = string1.split('').reverse();
    let palavra2 = string2.split('').reverse();

    for (let i = 0; i < palavra2.length; i++) {
        if (palavra2[i] === palavra1[i]) {
            helper++;
        }
    }
    if (helper === palavra2.length) {
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }
}

console.log('\nPart 7');

comparation('trybe', 'be');
comparation('joaofernando', 'fernan');