// default parameter declare 
function num(first, second='kalachan') {
    const fullName = first +' '+ second;
    return fullName;
}
const result = num('kalam')
console.log(result)


const multipleLine = `i love this code all time practice
always practice code  
first lline of code 
second line of code
third line of string`
// console.log(multipleLine);

const tag = `
<div>
   <h2>Wellcome to your website</h2>
   <p>hard work , success in your life</p>
</div>
`

// function arrow 
const doubleIt = x => x * 2;

// spread

const ages = [23, 34, 53, 53, 56, 64];
const newAges = [...ages, 25, 57, 98, 70];
const newLine = newAges;
console.log(newLine)
console.log(newAges)


// distructuring

const { name, color,...r } = { name: 'Mehedi', age: 22, height: '5.8', color: 'black' }
const [x,y,...c]=[23,44,65,78]

console.log(name, color,r)
console.log(x,y,...c)
