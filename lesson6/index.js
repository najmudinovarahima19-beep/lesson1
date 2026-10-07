// Функциялар

// function declaration
// function name() {
    // alert('hello')
// }
// name()

// function expresstion
// const name = function ()  {
    // alert('hello');
// }
// name()


// function arrow
// const name = () => {
    // alert('hello');
// }
// name()
    
// в чем разница между ними?
// function declaration - можно вызвать до объявления функции
// function expression - нельзя вызвать до объявления функции
// function arrow - нельзя вызвать до объявления функции

//  function name(param) {
//     alert(param);
//  }
//  name('hello')

// function name(a, b) {
//     alert(a+b);
// }
// name(5, 10);


//  setTimeout( () => {
//     alert('hello');
//  }, 5000);
    

//  setInterval(
//     () => {
//         alert('hello');
//     }, 5000);

let btn1 = document.getElementById('btn1');
btn1.onclick = function(){
    // alert('hello');
    document.body.style.backgroundColor = 'red'
}


let btn2 = document.getElementById('btn2');
btn2.onclick = function(){
    // alert('hello');
    document.body.style.backgroundColor = 'blue'
}




