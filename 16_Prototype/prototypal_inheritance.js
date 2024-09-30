
function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};


function Developer(name, age, language) {
    Person.call(this, name, age);  
    this.language = language;
}


Developer.prototype = Object.create(Person.prototype);


Developer.prototype.constructor = Developer;


Developer.prototype.code = function() {
    console.log(`${this.name} is coding in ${this.language}.`);
};


const dev1 = new Developer('Alice', 30, 'JavaScript');
const dev2 = new Developer('Bob', 25, 'Python');


dev1.greet();  
dev1.code();   

dev2.greet();  
dev2.code();  
