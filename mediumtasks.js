let n = 6;
let k;
if(n%2==0) {
k=n/2;
} else {
    k=n
}
console.log(k)


let apples=6;
if(apples%3==0) {
    console.log("Да,можно")
} else {
    console.log("Нельзя")
}

let a = 6;
let b = 5;
let c = 5;
if(a+b>c & a+c>b & b+c>a) {
    console.log("Да")
} else {
    console.log("Нет")
}

if(a+b>c & a+c>b & b+c>a) {
if(a==b & b==c) {
    console.log("Равносторонний")
} else if(a==b || a==c || b==c) {
    console.log("Равнобедренный")
} else if(a!=b & a!=c & b!=c) {
    console.log("Разносторонний")
} 
} else {
    console.log("Несуществующий")
}

let weight = prompt("Введите вес товара");
let country = prompt("Введи страну доставки");
if(weight<=1) {
    alert("10 долларов")
} else if(weight>1 & weight<5) {
    if(country=="США") {
    alert("20 долларов")
    } else {
    alert("30 долларов")
    }
} else if(weight>5) {
    alert("50 долларов")
}