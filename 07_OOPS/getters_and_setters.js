class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email.toUpperCase();
    }
    get password() {
        return this._password.toUpperCase();
    } 
    set password(password) {
        // this.password = password;
        this._password = password;
    }
    set email(email) {
        this._email = email; 
    }

}

const farooque = new User('kk@gmail.com', '1234');
console.log(farooque.password);
console.log(farooque.email);
