// LOOPS
// for loops
const names = ['Shaun', 'Mario', 'Luigi', 'Mosh Homedani', 'Traversy Media'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html)
}

// While loop
// The only difference from the for loop is the syntax
// let i = 0;
// while(i < 3) {
//     console.log('in loop: ', i)
//     i++;
// }

const employess = ['Shaun', 'Mario', 'Luigi']

let i = 0;
while(i < employess.length) {
    console.log(employess[i]);
    i++;
}

// do while loop
// This will execute the code atleast once even if the condition is not true
let k = 5;

do {
    console.log('Value of i is: ', k);
    k++;
} while(k < 3);



// IF STATEMENTS
const age = 25;

if(age > 20) {
    console.log('You are over 20 years old');
}

const password = 'p!ss1';

if(password.length >= 8 || password.includes('@') || password.includes('!')) {
    console.log('pass');
} else {
    console.log('The password should at least be 8 characters long, should contain both uppercase and lowercase characters and should contain characters such as !, @, $, #, *, %')
}