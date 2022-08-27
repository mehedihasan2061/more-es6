const numbers = [12, 22, 33, 43, 53, 5]
// function getDoubleNumber(numbers) {
//     const doubleNumber = [];
//     for (const number of numbers) {
//         const doubleIt = number * 2;
//         doubleNumber.push(doubleIt);
//     }
//     return doubleNumber;
// }

const number = num => num * 2;
const makeIt =numbers.map(number)
// const result = getDoubleNumber(numbers);
// console.log(result)
// console.log(makeIt)



const id = [2, 3, 4, 5, 6, 7, 8, 9];
// variable name=anyname=>anyname*2
const doubleIt = num => num* 2;
const value = id.map(doubleIt)
// console.log(value);



const roll = [1, 2, 4, 5, 6];
const makeTriple = rollNumber => rollNumber * 3;
const finalResult = roll.map(makeTriple);
// console.log(finalResult);



//  map using easy to task 

const total = roll.map(x => x * 4);

// console.log(total)



const num = [2, 3, 5, 64, 63, 62, 23];
const friends = ['mehedi','hasan','masud','mahin'];
const final = friends.map(friend => friend[1])
// console.log(final)


// const result = num.map(m => m * 2);


// const result1 = num.map(m => m + 2);
// const result3 = num.map(m => m - 2);
// const result4 = name.map(m => m.length);

// console.log(result4)


const products = [
    { name: 'laptop', color: 'silver', price: '67000' },
    { name: 'mobile', color: 'silver', price: '7000' },
    { name: 'tab', color: 'silver', price: '67000' }
]

// const items = products.map(device => device.price);
const items = products.map(device => device.name);
// console.log(items)


