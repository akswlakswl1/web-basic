//let 은 값을 재할당할 수 있음
//const 는 초기값 할당 후 값을 변경할 수 없음

//number
let age = 25;
console.log(age);

//string
let name = "Alice";
console.log(name);

//bool
let isStudent = true;
console.log(isStudent);

//nullable
let value = null;

//variable
let variable;
console.log(variable);

//symbol
let uniqueSynbol = Symbol("unitye")
console.log(uniqueSynbol);

//동등
let a = 5
let b = "5"
console.log(a == b); //true

//메모리 위치
let a1 = 5
let b2 = "5"
console.log(a2 === b2); //false


let x = true;
let y = false;
//and
console.log(x && y); //false

//or
console.log(x || y); //true

if (age >= 18){
    console.log("성인입니다. ");
}


function greet(name){
    console.log("hello~ ",name);
}

function add(x,y){
    return x+y;
}

let result = add(20+30);

const fruits = ['apple','banana','oramge','kiwi']

console.log(fruits[0]);

fruits.push('grapes')
const last = fruits.pop() //마지막 원소 제거

const person = {
    name : "John",
    age : 20,
    job : "Developer"
}

const student = {
    name : "joy",
    age : 19,
    major : "computer science",
    grades : [85,90,78,95],
    calcuateAvg: function() {
        const sum = this.grades.reduce((total,grades) => total + grade,0);
        return sum / this.grades.length;
    }
}
