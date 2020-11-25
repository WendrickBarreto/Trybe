const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// 1
const addMorningTurn = (lesson, key, value) => lesson[key] = value;
addMorningTurn(lesson2, 'turno', 'manhã');

// 2
const listKeys = (lesson) => console.log(Object.keys(lesson));
listKeys(lesson1);

// 3
const objLength = (lesson) => console.log(Object.keys(lesson).length);
objLength(lesson1);

// 4
const listValues = (lesson) => console.log(Object.values(lesson));
listValues(lesson1);

// 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6
const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (i in array) {
      total += obj[array[i]].numeroEstudantes;
    }
    return total;
};
console.log(getNumberOfStudents(allLessons));

// 7
const valueByNumber = (lesson, number) => console.log(Object.values(lesson)[number]);
valueByNumber(lesson1, 0);

// 8
const verifyPair = (lesson, key, value) => {
    const objtFull = Object.entries(lesson);
    let igual = false;
    for (let i in objtFull) {
        if (objtFull[i][0] === key && objtFull[i][1] === value) igual = true;
    }
    return igual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));