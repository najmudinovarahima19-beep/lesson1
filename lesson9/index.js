// DOM негиздери

// let title = document.querySelector('h1')
// let btn1 = document.querySelector("#btn1")
// let btn2 = document.getElementById("btn2")

// btn1.addEventListener('click', () => {
//     // alert('кнопка работает')
//     title.style.background = 'black'
//     title.style.color = 'red'
//     title.style.width = '200px'
//     title.style.height = '200px'
// })
// btn2.addEventListener('click', () => {
//     document.body.style.background = 'red'
// })
// btn3.addEventListener('click', () => {
//     document.body.style.background = 'white'
// })



// let lamp = document.getElementById('img')
// let on = document.getElementById('on')
// let off = document.getElementById('off')

// on.onclick = function(){
//     lamp.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8InMt3sRcSiqAcCDiy8ooHn0CSDL173AsT82-yYoXA&s=10"
// }

// off.onclick = function (){
//     lamp.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqZCzyCscuTqu1gribw6ppdPuQWG7YrQn_s4Q-hNjGA&s=10'
// }


// -----------------------------------------------------

const red = document.getElementById("white");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const purple = document.getElementById("purple");

white.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
});

blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});

green.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});

yellow.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});

purple.addEventListener("click", function() {
    document.body.style.backgroundColor = "purple";
});
