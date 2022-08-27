class TeamMember{
    name;
    location;
    constructor(name, location) {
        this.name = name
        this.location=location
    }
    feedback() {
        console.log(`${this.name} Thank you feedback `)
    }
    coursePractice(time) {
        console.log(`daily practice on  ${time} pm regularly`)
    }
    class(chapter) {
        console.log(`one chapter completed line by line ${chapter}`)
    }
}



class Discription extends TeamMember{
    
    occuption = 'student'
    
    team = 'football team'
    constructor(name, location) { 
        super(name,location)
    }
   
    
   
}
class Instructor extends TeamMember{
    
    occuption = 'web instructor'
    
    team = 'web team'
    constructor(name, location) { 
        super(name,location)
    }
    
    
    
   
}

class Developer extends TeamMember{
   
    occuption = 'student'
    
    team = 'web Developer'
    
    constructor(name, location) { 
        super(name,location)
    }
   
    provideResume(feature) {
        console.log(`please provide ${feature}`)
    }
}

const mehedi = new Discription('mehedi hasan', 'Narayandahaar')
console.log(mehedi)
mehedi.feedback()

const anika = new Developer('anika', 'dhaka')
console.log(anika);
anika.feedback()
anika.coursePractice(4)
anika.class(120)