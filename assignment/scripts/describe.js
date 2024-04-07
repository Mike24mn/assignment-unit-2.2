// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE

// We make a variable called name and set name to "Dane".
// We create a conditional, where if our variable 'name' is equal (as in exact match)
// to 'Mary', we console log "Hi, Mary", otherwise we console log 
//"How do you do?". In this example console log would return "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE

// We create a variable called 'secret' and a second variable called 'code'.
// Variable 'code' is set to the numerical value 123, whereas the variable 'secret'
// is dependent on the conditional analysis of the proceeding if statements.
// The first if statement says if 'code' is equal to (exactly) 123, 'secret' is set 
// to the string "super" and the 'code' numerical value of 123 is multiplied by 2 
// via the multiplication operator. The second if statement is proceeded by the 
// condition 'if "code" is greater than the numerical value 250, assign the string 
// "duper" to the variable 'secret''. At the end, we console log the result of
// secret. In this case, console log(secret) returns 'super' and multiplies 'code' 
// by two, yielding 246. 246 is less than 250, so the second if statement is 
// disregarded. - NOTE: Apologies for the large text block comment here, 
//                      I wanted to be thorough! //

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE

// We create a variable isStudent and assign Boolean logic 'true'
// We then create another variable 'age' and assign the numerical value
// 34. Finally, we create a final variable 'zip' and assign the numerical 
// value 55407. We then create an if statement that examines if 'isStudent' 
// is true AND if 'zip' is greater than 80000. If these conditions are met,
// we then console log "You're a student on the West Coast". If these conditions
// are not met, we proceed into the first elif statement that examines the conditions
// if 'isStudent' is false OR 'age' variable is less than the numerical value 30,
// if EITHER of these two conditions are met, we console log "What are you hobbies?".
// If neither of the preceeding if and elif statements run, we proceed into the second
// elif statement. This only runs if 'isStudent' is true, 'zip' is less than or equal
// to 80000, and 'age' is equal to or greater than 30. If these conditions are met,
// we console log "Welcome to Prime!". Finally, if none of the 3 preceeding lists of
// conditions are met, the final else statement runs and we console log
// "How about the weather?"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//FIX - variable colorOne should be set to 'blue', not red.
// variable colorTwo should be set to 'red', not blue.
// The boolean logic and analysis is correct, however, only one
// variable, colorOne, is being updated to 'purple'.
// We should add colorTwo = 'purple' beneath the colorOne variable code 
// in our if statement. Also, console log is not being utilized, this could have
// prevented these errors in the first place if code was checked more thoroughly!

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//FIX - The above analysis of the temp variable is correct. However,
// the proceeding 'const time' variable is formated wrong and missing the correct
// syntax to create a variable. Corrected version should be in camel case and be
// proceeded by let, i.e, let constTime = 4; for example.
// also the condition is incorrect within our if statement. As it currently stands,
// the code examines if temp is greater then 39 OR time is greater than or equal to 
// 4. 'time' is not even a defined variable and the vertical bar representing OR
// should be replaced by && (representing AND). Updated code with camel case would 
// be if (temp > 39 && constTime >= 4) {console.log('throw away the food!');}.
// SIDENOTE: const is for constant unchanging variables, we may not want this code
// to use a constant variable that cant be updated, hence my renaming fix above.

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//FIX - The above analysis of the variables is correct, it is worth noting that
// like in our last example, minAge is keep constant by the const keyword.
// The analysis of the if statement is incorrect. The current if statement
// is checking if minAge is less than or equal to age. The correct condition 
// would be if(age >= minAge) {console.log('enter');} else {console.log('no entry')}

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

