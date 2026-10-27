// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then((users) => {
//     let container = document.querySelector('.container')
//     users.forEach(element => {
//         container.innerHTML +=`
//         <div class="cart">
//         <h1>${element.name}</h1>
//         <p>${element.email}</p>
//         <b>${element.phone}</b>
//         <hr>
//         </div>
//         `
//     });
//     console.log(users);
// })
// .catch((error) => {
//     console.log(error);
// })



fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((users) => {
    let container = document.querySelector('.container')
    users.forEach(element => {
        container.innerHTML +=`
        <div class="cart">
        <h1>${element.name}</h1>
        <h2>${element.website}</h2>
        <h3>${element.username}</h3>
        <h6>${element.email}</h6>
        <b>${element.cartchPhrase}</b>
        <p>${element.bs}</p>
        <b>${element.phone}</b>
        <hr>
        </div>
        `
    });
    console.log(users);
})
.catch((error) => {
    console.log(error);
})
