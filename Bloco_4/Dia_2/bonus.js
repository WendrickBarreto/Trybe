let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            let helper = numbers[i];

            numbers[i] = numbers[j];
            numbers[j] = helper;
        }
    }
}

console.log(numbers);

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers2.length; i++) {
    for (let j = 0; j < numbers2.length; j++) {
        if (numbers2[i] > numbers2[j]) {
            let helper = numbers2[i];

            numbers2[i] = numbers2[j];
            numbers2[j] = helper;
        }
    }
}

console.log(numbers);

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberMutiplication = [];

for (let i = 0; i < numbers3.length; i++) {
    if (i + 1 >= numbers3.length) {
        numberMutiplication.push(numbers3[i] * 2);
    } else {
        numberMutiplication.push(numbers3[i] * numbers3[i + 1]);
    }
}

console.log(numberMutiplication);