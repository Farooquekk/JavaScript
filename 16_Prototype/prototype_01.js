// let myName = 'Farooque';

// console.log(myName.truelength(myName));
let myHeroPowers = ['thor', 'spiderman'];

let myHeros = {
    thor: 'Hammer',
    'spidreman': 'sling',
    getSpiderPower : function() {
        console.log(`Spidy power is ${this.spidreman}`);
    }
}

Object.prototype.farooque = function () {
    console.log(`farooque is present in all Objects`);
}

Array.prototype.heyFarooque = function () {
    console.log(`Farooque says hello`);
}
// myHeros.heyFarooque();
// myHeroPowers.heyFarooque();
// myHeroPowers.farooque();
// // myHeros.farooque();


///// Inheritance

const User =  {
    name: "Farooque",
    email:"kk@gmail.com"
    
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
isAvilable:false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = 'chaiOrToast';

String.prototype.trueLength = function () {
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUserName.trueLength();

'Farooque'.trueLength();
'kk'.trueLength();
