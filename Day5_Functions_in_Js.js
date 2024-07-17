// Activity 1 : Function Declaration
// Task 1 :

function evenOdd(numA) {
    if(numA%2==0){
        console.log(`${numA} is even`);
    }else{
        console.log(`${numA} is Odd`);
    }
   }
   evenOdd(10);

// Task 2 :

    function squareroot(a) {
        return `square root of given number : ${Math.sqrt(a)}`;
    }
    console.log(squareroot(5));

// Activity 2 : Function Expression
// Task 3 :

   function maxNumber(a,b) {
     console.log((a>b)? `${a} is greater than ${b}` : `${b} is greater than ${a}`);
   }
   maxNumber(50,100);

// Task 4 :

   function concatString(a,b){
    return a + b;
   }console.log(concatString('Hello','World'));

// Activity 3 : Arrow Function 
// Task 5 :

   let sum=(a,b) => {
      return `the sum of two number : ${a+b}`;
   } ; console.log(sum(10,20));

// Task 6 :

   let findChar = (b) =>{
    return b.indexOf('e') !== -1;
   }
   console.log(findChar('Hello'));

// Activity 4 : Function Parameter and Default Values
// Task 7 :

   function product(a,b=5) {
    return `the product of two number ${a*b}`;
   }
   console.log(product(10));

// Task 8 :

   function personDetail(name , age = 20) {
    if (age >= 18){
        return (`Hello ${name} , at age ${age} , you are eligible to vote`);
    } else{
         return `Hello ${name} , at age ${age} , you are not eligible to vote`;
    }
   }
   console.log(personDetail('Ram', 25));

// Activity 5 : High Order Function 
// Task 9 :

    function repeatFunc(func,repeat) {
        for(let i =0 ; i<=repeat ; i++){
            func();
        }
    }
    const hello = () =>{
        console.log('hello');
    }
    repeatFunc(hello , 3);

// Task 10 :

    function mainFunc(func1 , func2 , value) {
        const firstFunc = func1(value);
        const secondFunc = func2(firstFunc);
        return secondFunc;
    }
    const valuefunc = (num) =>{
        return num + 3
    }
    const resultfunc = (num) =>{
        return num*num
    }
    const finalResult = mainFunc(valuefunc,resultfunc,3);
    console.log(finalResult);

    // Day 5 Completed ...