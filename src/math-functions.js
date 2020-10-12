/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
*/ 

export function sum(a, b) {

    const sumResult = (a + b);
    const string = `The sum of ${a} and ${b} is ${sumResult}.`;
    
    return [sumResult, string];
}

/*
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/
export function multiply(a, b) {

    const multResult = (a * b);
    const string = `The product of ${a} and ${b} is ${multResult}.`;
    
    return [multResult, string];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiplyThreeNumbers() that takes in three 
numbers as separate arguments and returns 
an array where the first element is the sum of those three numbers, 
the second element is the product of those three numbers,  
and the third and fourth elements are strings that EXACTLY follow this example and 
use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() 
function that you've already created. You're going to have to be resourceful to figure out 
how to do this. However, you may continue to use the + operator for string concatenation.
*/

export function sumAndMultiplyThreeNumbers(r, g, c) { //eslint-disable-line

    const sum1 = sum(r, g)[0];
    const finalSum = sum(sum1, c)[0];
    console.log(finalSum);

    const mult1 = multiply(r, g)[0];
    const finalMult = multiply(mult1, c)[0];
    console.log(finalMult);

    const string1 = `${r} and ${g} and ${c} sum to ${finalSum}.` ;
    const String2 = `The product of ${r} and ${g} and ${c} is ${finalMult}.`;

    return [finalSum, finalMult, string1, String2];
}
/* export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line

    const sumResult2 = sum(a, b, c);
    const multResult2 = multiply(a, b, c);

    const string1 = `${[0]} and ${[1]} and ${[2]} sum to ${sumResult2}.` ;
    const String2 = `The product of ${[0]} and ${[1]} and ${[2]} is ${multResult2}.`;
    
    return [sumResult2, multResult2, string1, String2];
} */


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArrayWithThreeNumbers() that takes in an array of numbers 
as its single argument and then returns an array where the first element is the sum 
of the numbers in the array, and the second element is a string that EXACTLY follows 
this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. 
To do addition, use your sum() function that you've already created. You're going to 
have to be resourceful to figure out how to do this. However, you may continue 
to use the + operator for string concatenation.
*/

export function sumArrayWithThreeNumbers(sumArr) {
    const sumOfArr1 =
    sumAndMultiplyThreeNumbers (sumArr[0], sumArr[1], sumArr[2]);
    return [sumOfArr1, `${sumArr[0]}, ${sumArr[1]}, ${sumArr[2]}`];
} 


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArrayWithThreeNumbers() that takes an array of numbers 
as its argument and returns an array whose first element is the product of those numbers, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. 
To do multiplication, use your multiply() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
This function should handle an array containing three elements. However, 
you may continue to use the + operator for string concatenation.
*/

export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    const mult1 = multiply(multArr[0], multArr[1])[0];
    const mult2 = multiply(mult1, multArr[2])[0];

    return [mult2, `The numbers ${multArr[0]}, ${multArr[1]}, ${multArr[2]}`];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.
*/

export function multiplyAnyArray(array) { //eslint-disable-line
    let product = 1;
    for(let i = 0; i < array.length; i++){
        product = multiply(product, array[i])[0];
    }
    return [product, `The numbers ${array} have a product of ${product}.`];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
