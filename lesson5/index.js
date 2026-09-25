// циклдар
 
// for-цикл
// while-цикл

// for (i =0; i< 10; i++) {
    // console.log('hello world' + i);
// }

// let i = true;
// while (i ) {
    // console.log('hello world' +i);
    // i++;
// }

// == - проверка на равенство
// === - проверка на равенство и тип данных


 
// for (i =0; i< 10; i++) {
//     if (i == 5){
//         // break;
//         continue;
//     }
//  console.log( i);
// }
 

// for (i =0; i< 10; i++) {
//     if(i % 2 == 0){
//         console.log(i); 
//     }
// }

// for (i = 1 ; i < 10; i++) {
//     for (j = 1; j<5; j++){
//         console.log(i + '*'+ j + '=' + i * j);
//     } 
// }

// // пароль
// let password = '1234';
// let userPassword = prompt('введите пароль');
// while (userPassword !== password) {
//     userPassword = prompt('попробуйте еще раз');
// }
// alert('вы вошли в систему');




let tab = Number (prompt('Канча таблица чыгарабыз?'));
let rrr = Number (prompt('Таблица канчага чейин болсун?'));

for (let i = 1; i <= tab; i++) {
    console.log('Таблица ' + i);
    for (let j = 1; j <= rrr; j++) {
        console.log(i + '*' + j + '=' + i * j);
    }
}



  




