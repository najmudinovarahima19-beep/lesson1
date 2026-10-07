// методы массивов
// что такое массив?
// length- Массивтин ичиндеги элементтердин саны
// push- массивтин аягына элемент кошот
// pop- Массивтин аягынан элементти алып салат 
// unshift- Массивтин башына элемент кошот
// shift- Массивтин башынан элементти алып салат
// splice- массивтин ичиндеги элементтерди алып салат ( 1- баштапкы индексб 2- канча элементти алып салуу керектиги )
// reverse- массивтин ичиндеги элементтерди тескери кылат 
// reduce- массивтин ичиндеги элементтердин суммасын чыгарат
// map- ар бир элементти озгортуп жаны массив жасоо

// let arr = [1, 2, 3, 4, 5];

// // arr.push(10);
// arr.pop()
// arr.unshift(0);
// arr.shift();
// arr.splice(1, 2)
// arr.reverse();




// console.log(arr);
// console.log(arr.length);
// console.log(arr.reduce((acc, curr) => acc + curr, 0));


// const doubled = arr.map ((num) => num * 2);
// console.log(doubled); 

// const evens = arr.filter((num) => num % 2 === 0);
// console.log(evens);

// console.log(arr[0]); массивтин биринчи элементтин чыгарат

// home work


let rr = [];
for (let i = 1; i <= 50; i++) {
    rr.push(i);}
let result = rr
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);
console.log(result);





 

