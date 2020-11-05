function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// 1
let days = document.querySelector("#days");
let buttonContainer = document.querySelector(".buttons-container");

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let i = 0; i < dezDaysList.length; i++) {
    let day = document.createElement("li");
    day.innerText = "" + dezDaysList[i];
    day.className = "day";
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
        day.className += " holiday";
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 25 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
        day.className += " friday";
    }
    days.appendChild(day); 
}

// 2
function botão(Feriados) {
    let button = document.createElement("button");
    button.id = "btn-holiday";
    button.innerText = "Feriados";
    buttonContainer.appendChild(button);
} 
botão("Feriados");

// 3
let button = document.querySelector('#btn-holiday');
let helper = 0;
button.addEventListener("click", function(){
    let holidays = document.querySelectorAll(".holiday");
    if (helper !== 0) {
        for (let i = 0; i < holidays.length; i++) {
            holidays[i].style.backgroundColor = "rgb(238,238,238)";
        }
        helper = 0;
    }else{
        for (let i = 0; i < holidays.length; i++) {
            holidays[i].style.backgroundColor = "red";
            helper = 1;
        }
    }
});

// 4
function botão2(sextaFeira) {
    let button = document.createElement("button");
    button.id = "btn-friday";
    button.innerText = "Sexta-Feira";
    buttonContainer.appendChild(button);
} 
botão2("Sexta-Feria");

// 5
let button2 = document.querySelector('#btn-friday');
let sextas = [];
let helper2 = 0;
button2.addEventListener("click", function(){
    let friday = document.querySelectorAll(".friday");
    if (helper2 !== 0) {
        for (let i = 0; i < friday.length; i++) {
            friday[i].innerText = sextas[i];
        }
        helper2 = 0;
    }else{
        for (let i = 0; i < friday.length; i++) {
            sextas[i] = friday[i].innerText;
            friday[i].innerText = "É Sexta CARAIO!!!!";
            helper2 = 1;
        }
    }
});

// 6
