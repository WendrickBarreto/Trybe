let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim',
};

// Part 1
console.log('Part 1');
console.log(`Bem-vinda, ${info.personagem}`);

// Part 2
console.log('\nPart 2');
info.recorrente = 'Sim';
console.log(info.recorrente);

// Part 3
console.log('\nPart 3');
for (const i in info) {
    console.log(i);
}

// Part 4
console.log('\nPart 4');
for (const i in info) {
    console.log(info[i]);
}

// Part 5
console.log('\nPart 5');
console.log(`${info.personagem} e ${info2.personagem},
${info.origem} e ${info2.origem},
${info.nota} e ${info2.nota}`);
if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
    console.log('Ambos recorrentes');
}