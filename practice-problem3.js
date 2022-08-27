//   task-5 

const add = [12, 23, 32, 43];
let arr = [];
const total = add.map(num => num * 5);
arr.push(total)

// console.log(total,arr)

// task -6

const add2 = [2, 3, 4, 3, 5, , 7, 9, 8, 11, 23, 44];
const number = add2.find(num => num >= 5)
console.log(number)
// const oddNumber = add2.filter(x => x % 2 === 1);
// console.log(oddNumber)

// task-7

const shoppingCart = [
    {
        name: 'mehedi hasan',
        occuption: 'web developer',
        salary: 5000,
        
        shopping: {
            shirt: 1000,
            pant: 2000,
            panjabi: 1000,
            shoes: 1000,
            price: 5000,
            cost: 5400,
            party:5200
        }
    }
];
console.log(shoppingCart[0].shopping===5000)
// const price = shoppingCart.find(money => money[0].shopping>=5000)
// console.log(price)
