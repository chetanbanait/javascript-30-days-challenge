
/* Write a program to print 1 t0 10 using loop */

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/* Multiplication table of 5 */

for (let i = 1; i <= 10; i++) {
    console.log(`${5}X${i}=${5 * i}`);
}

/* sum of numbers 1 to 10 */

let sum = 0, i = 1;
while (i <= 10) {
    sum += i;
    i++;
}

console.log("Sum is : ", sum);


/* print from 10 to 1 */

i--;

while (i) {
    console.log(i);
    --i;
}


/* print 1 to 5 */
i = 5;

console.log("Do-While loop!!");
do {
    console.log(i);
    --i;

} while (i > 0);

let fact = 1;

let find = 15;
let find1 = find;

do {
    fact *= find;
    --find;
} while (find >= 1);
console.log(`factorial of ${find1} is: ${fact}`);


//print pattern using javascript

var I,j=1
var n=4;

for(I=1;I<=n;I++)
{
    let row=''
    for(j=1;j<=I;j++)
    {
       row+='*'
    }
    console.log(row);
}


/* print 1 to 10 with skip 5 */
console.log("Skip 5: ");

for (i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

console.log("Break at 7: ");
for (i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}


/* scripts to calculate factorial  */

const facto = (num) => {
    if (num == 0 || num == 1) {
        return 1;
    }

    return num * facto(num - 1);
}

console.log(`factorial of ${find1} is : ${facto(find1)}`);


/* scripts to find sum */

const findSum = (num) => {

    if (num == 1) {
        return 1;
    }
    return num + findSum(num - 1);
}
console.log(`sum of ${find1} is : ${findSum(find1)}`);


const multiplicationTable = (num, i) => {

    if (i == 11) {
        return;
    }

    console.log(`${num}X${i}=${num * i}`);

    multiplicationTable(num, i + 1);
}

multiplicationTable(10, 1);



const numberPrint = (num, limit) => {
    console.log(`numberPrint from ${num} to ${limit}`);
    do {
        console.log(num);
        ++num;
    } while (num <= limit);
}


numberPrint(1, 10);