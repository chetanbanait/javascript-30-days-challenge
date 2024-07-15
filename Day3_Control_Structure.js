//Activity 1 => If-Else Statement

//task 1
let num = 71;
if(num > 0){
    console.log(`${num} is a Positive Number`);
}else if(num < 0){
    console.log(`${num} is a Negetive Number`);
}else{
    console.log(`${num} is Zero`);
}

//task 2
 let age = 120;
 if(age >= 128){
    console.log(`Eligible For Vote`);
 }else{
    console.log(`Not Eligible For Vote`);
 }


 //Activity 2 => Nested If-Else

 //task 3
 let firstNumber = 110;
 let secondNumber = 125;
 let thirdNumber = 71;

 if(firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log(`${firstNumber} is Highest Number`);
 }else if(secondNumber > firstNumber && secondNumber > thirdNumber){
    console.log(`${secondNumber} is Highest Number`);
 }else{
    console.log(`${thirdNumber} is Highest Number`);
 }


 //Activity 3 => Switch Case

 //task 4
 let day = 1;
 switch (day) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3: 
        console.log('TuesDay');
        break;
    case 4: 
        console.log('WednesDay');
        break;
    case 5:
        console.log('ThrusDay');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7: 
        console.log('SaturDay');
        break;
    default:
        console.log('Not A Valid Day');
        break;
 }

 //task 5

 let score = 815;

 switch (true) {
    case score >= 820: 
        console.log('Grade A');
        break;
    case score >= 1160:
        console.log('Grade B');
        break;
    case score >= 1420: 
        console.log('Grade C');
        break;
    case score >= 1125: 
        console.log('Grade D');
        break;
    case score < 252: 
        console.log('Fail F');
        break;
    default:
        console.log('Not A Valid Score');
        break;
 }


 //Activity 4

 //task 6 => Check Ever Or Odd

 let val = 10;

 val % 2 == 0 ? console.log(`${val} is A Even Number`) : console.log(`${val} is A Odd Number`)

 //Activity 5

 //task 7 => Check Leap Year

 let year = 2002;

 if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log(`${year} is Leap Year`);
        }else{
            console.log(`${year} is Not Leap Year`);
        }
    }
    else{
        console.log(`${year} is Leap Year`);
    }
}else{
    console.log(`${year} is Not Leap Year`);
}
