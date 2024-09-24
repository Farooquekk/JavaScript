
// fetch('htpps://something.com').then().catch()

// start
// creation of promises
const promiseOne = new Promise(function (resolve, reject) {
    // Do any asyn task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Asyn task is complete');
        resolve();
    },1000)

})
promiseOne.then(function () {
    console.log('Promise consumed');
}) 

////

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000);
    
}).then(function () {
    console.log('Async 2 resolved');
})

///
const promiseThree = new Promise(function (resolve, reject) {
setTimeout(() => {
    resolve({userName:'Farooque',email:'kk@gmail.com'}); // may pass --> object or array or function
}, 1000);    

})
// consuming promise three
promiseThree.then(function (user) {
   console.log(user); 
})

// promise four

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({userName:'Farooque',email:'kk@gmail.com'})
        }
        else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);

    
})

// const userName = promiseFour.then((user) => {
//     console.log(user);
//     return user.userName
// }) --> don't do this

const userName = promiseFour.then((user) => {
    console.log(user);
    return user.userName
}).then((userName => {
    console.log(userName);
})).catch(function (error) {
    console.log(error);
}).finally(() =>{
    console.log('The promise is either resolved or rejected');
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ userName: "JavaScript", password: "1234" })
        } else {
            reject('ERROR: JS went wrong');
        }
        
    }, 1000)
});
// promise can be implement by asyn await

async function consumePromiseFive() {
    try {
        const response = await promiseFive // promise is an object
        console.log(response);
    } catch (error) {
        console.log(error);
    }    
}
consumePromiseFive(); 

async function getAllUsers() {
    try {
        const response = await fetch('link');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error',error);
    }
}

// getAllUsers();

fetch('link').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error));
