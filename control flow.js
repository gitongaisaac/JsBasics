/* 
================================================================================================================================
LOOPS
================================================================================================================================
*/

/* ===== for loops ===== */
const names = ['Shaun', 'Mario', 'Luigi', 'Mosh Homedani', 'Traversy Media'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html)
}

/* ===== while loop ===== */
// The only difference from the for loop is the syntax
let z = 0;
while(z < 3) {
    console.log('in loop: ', z)
    z++;
}

const employess = ['Shaun', 'Mario', 'Luigi']

let i = 0;
while(i < employess.length) {
    console.log(employess[i]);
    i++;
}

/* ===== do while loop ===== */
// This will execute the code atleast once even if the condition is not true
let k = 5;

do {
    console.log('Value of i is: ', k);
    k++;
} while(k < 3);
 
/* 
================================================================================================================================
IF STATEMENTS
================================================================================================================================
*/

const age = 25;

if(age > 20) {
    console.log('You are over 20 years old');
}

const password = 'p!ss188gj@hdfh38jd';

if(password.length < 8) {
    console.log('The password should at least be 8 characters long');
}

else if(password.length >= 12 && password.includes('@')) {
    console.log('Strong password');
}

else {
    console.log('Your password is valid')
}






