
const numbers = [1, 3, 5, 7, 9];
const result = numbers.map(number => number + 1);
// console.log(result)


//   filter method 
const arrNum = [33, 50, 79, 78, 90, 101, 30];
const remaining = arrNum.filter(number => number % 10===0);
// console.log(remaining)

// find method
// const num = [33, 50,  79, 78, 90, 101, 30];
// const findNum = num.find(number => number % 2 === 0);
// console.log(findNum)


const num = [33, 50,  79, 78, 90, 101, 30];
const findNum = num.find(number => number % 3 === 0);
// console.log(findNum)


// reduce method

// const ages = [1, 9, 17, 22];
// const total = ages.reduce((previous, current) => previous + current, 0);
// // console.log(total)


const student = {
    name: 'mehedi',
    age:22
}
// console.log(student.age)




let date = {
    location: [
        {
            latitude: '34.5,36,5',
            longtitude: '56.6,97.5',
            city: 'mumbai',
            country:'India'
        }
    ]
}
// console.log(date.location[0].city)


const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};
// Console the value of email
// ● Console the value of address
// ● Console the value of city
// ● Console the value of lat
// ● Console the value of company name
          //   solve 

// console.log(user.email)
// console.log(user.address)
// console.log(user.address.city)
// console.log(user.address.geo.lat)
// console.log(user.company.name)

const people = [
    { name: 'meena', age: 20 },
    { name: 'rina', age: 15 },
    { name: 'dina', age: 22 }
    
];

 const total=people.reduce((previous,current)=>previous+current.age,0)

// const total = people[0].age + people[1].age + people[2].age;
console.log(total)
