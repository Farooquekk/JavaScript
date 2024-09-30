class User{
    constructor(userName) {
        this.userName = userName;
    }
    logMe() {
        console.log(`UserName : ${this.userName}`);
    }

    createId() {
        return `123`;
    }
}

const farooque = new User('Farooque');
console.log(farooque.createId());
farooque.logMe();

class Teacher extends User{
    constructor(userName,email) {
        super(userName);
        this.email = email;
            
            
    }
}

const iphone = new Teacher("iphone","i@phone.com");
 
     console.log(iphone.createId());

iphone.logMe();


