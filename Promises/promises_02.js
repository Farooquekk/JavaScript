
const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (false) {
            console.log("I am in the setTimeOut and with the delay of 5 sec");
            resolve("Hello ji ");
        }
        //console.log("Rejected ji");
        reject('Reject ji')
    }, 5000)
    
    console.log("I am outside of the setTimeOut function");

})
promise1.then(function () {
    console.log("I will execute after the promise is completed");
    setTimeout(function () {
        console.log("I am in the then and will execute after 5 sec");
     },5000)
}).catch(function (err) {
    console.log(err);
    console.log("Error hogaya ji");
}).finally(function () {
    console.log('finally completed');
})
