class Discription{
    name;
    occuption = 'student'
    location;
    team = 'football team'
    constructor(name, location) {
        this.name = name
        this.location=location
    }
    
    coursePractice(time) {
        console.log(`daily practice on  ${time} pm regularly`)
    }
    class(chapter) {
        console.log(`one chapter completed line by line ${chapter}`)
    }
}
const result = new Discription('Mehedi Hasan','Narayandahar');
console.log(result)
result.coursePractice(4)
result.class(15)
