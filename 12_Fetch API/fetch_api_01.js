
let url = 'https://jsonplaceholder.typicode.com/posts';
let url2 = 'https://fake-json-api.mock.beeceptor.com/users';
let url3 = 'https://chat.whatsapp.com/FO4DCncw2hl4iDqp2AeRuW';
let url4 = '';

fetch(url2).then(responce => {
    if (!responce.ok) {
        throw new Error('Network Error');
    }
    return responce.json()
}).then(data => {
    // data.forEach(user => {
    //     console.log(`UserId : ${user.id} and UserName : ${user.name} : UserPhoto : ${user.photo}`);
    // });
    console.log(data);
}).catch(error => {
    console.log(error);
})
