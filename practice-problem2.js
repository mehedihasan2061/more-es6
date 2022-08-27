// task - 1

//  let const variable declare
 
const num = 23;

// do your update this variable 
let num1 = 33;
num1 = 48;


// task--2

// template string use
const name = 'mehedi hasan';
const job = 'govt';

const createHtml = `my name is ${name}

ami ${job} kori `;
console.log(createHtml);




// task --3.1
const result = a => a / 5;
const multiply = result(25);
// console.log(multiply)

// task --3.2

const add = (a, b) => {
    const first = a + 2;
    const second = b + 2;
    const multiply = first * second;
    return multiply;
}

// task --3.3

const add2 = (x, y, z) => {
    const multiplyNum = x * y * z;
    return multiplyNum;
   

}

const add3 = (r, s) => {
    const firstNum = r + 2;
    const secondNum = s + 2;
    const totalNum = firstNum * secondNum;
    return totalNum;
}

// const total = add3(3,5);
// console.log(total)

