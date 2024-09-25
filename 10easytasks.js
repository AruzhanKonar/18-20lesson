let number = prompt("Введите число");
let evenNumbers = number % 2 === 0 ? "Четное число" : "Нечетное число";
alert(evenNumbers)

let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
let numbers = num1>num2 ? "Первое число больше второго" : num1===num2 ? "Числа равны" : "Второе число больше первого";
alert(numbers)

let year = prompt("Введите год");
if(year%4===0) {
    alert("Високосный год")
} else {
    alert("Не високосный год")
}

let hour = 9;
if (hour>=6 & hour<=12) {
    alert("Доброе утро!")
} else if (hour>12 & hour<=18) {
    alert("Добрый вечер!")
} else {
    alert("Доброй ночи!")
}

let numb1 = 60;
let numb2 = 43;
let numb3 = 78;
if (numb1 > numb2 & numb1 > numb3 ) {
    console.log("Первое число наибольшое")
} else if 
    (numb2 > numb1 & numb3 > numb3 ) {
    console.log("Второе число наибольшое")
} else {
    console.log("Третье число наибольшое")
}

let login = prompt("Введите логин");
let password = prompt("Введите пароль");
if(login === "aruzhan" & password === "123") {
    alert("Доступ разрешен")
} else {
    alert("Доступ запрещен")
}

let month = prompt ("Введите число от 1 до 12");
if(month==="1") {
    alert("Январь")
} else if(month==="2") {
    alert("Февраль")
} else if(month==="3") {
    alert("Март")
} else if(month==="4") {
    alert("Апрель")
} else if(month==="5") {
    alert("Май") 
} else if(month==="6") {
    alert("Июнь")
} else if(month==="7") {
    alert("Июль") 
} else if(month==="8") {
    alert("Август")
} else if(month==="9") {
    alert("Сентябрь")
} else if(month==="10") {
    alert("Октябрь")
} else if(month==="11") {
    alert("Ноябрь")
} else if(month==="12") {
    alert("Декабрь")
} else {
    alert("Вы ввели неправильное число")
}

let age = prompt("Введи свой возраст");
if(age>=0 & age<=12) {
    alert("Десткий возраст")
} else if(age>12 & age<18) {
    alert("Подрастковый возраст")
} else if(age>=18 & age<65) {
    alert("Взрослый возраст")
} else {
    alert("Пожилой возраст")
}

let numMonth = prompt("Введите номер месяца");
if(numMonth==12 || numMonth==1 || numMonth==2) {
    alert("Зима")
} else if(numMonth==3 || numMonth==4 || numMonth==5) {
    alert("Весна")
} else if(numMonth==6 || numMonth==7 || numMonth==8) {
    alert("Лето")
} else if(numMonth==9 || numMonth==10 || numMonth==11) {
    alert("Осень")
} else {
    alert("Неправильное число")
}

