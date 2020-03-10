
//// Tema Javascript - Oiegar Andrei-Sorin 



// //1.

// const people = ["Greg", "Mary", "Devon", "James"];

// // Using a loop, iterate through this array and console.log all of the people.

// for(let i = 0 ; i < people.length ; i++ ){
//     console.log(people[i])
// }

// // Write the command to remove "Greg" from the array.

// people.shift()
// console.log(people)


// // Write the command to remove "James" from the array.

// people.pop()
// console.log(people)


// // Write the command to add "Matt" to the front of the array.

// people.unshift("Matt")
// console.log(people)


// // Write the command to add your name to the end of the array.

// people.push("Andrei")
// console.log(people)


// // Using a loop, iterate through this array and after console.log - ing "Mary", exit from the loop.

// for( let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }
// console.log(people[1])

// // Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

// people.slice(2,4);

// // Write the command that gives the indexOf where "Mary" is located.

// people.indexOf("Mary")


// // Write the command that gives the indexOf where "Foo" is located(this should return -1).

// people.indexOf("Foo")



// // 2.


// const myPenguin = {
// character: 'Captain Cook, Greta, other penguins ',
// origin: 'Mr. Popper Penguins',
// author: 'Richard and Florence Atwater',
// notes: 'Book about a house painter who ends up with a flock of penguins'
// }
// // Write a line of code that adds a new property to your penguin called canFly and set it to false.

// myPenguin.canFly = false;

// // (Note: Don't modify the penguin-creation code that you wrote above!
// // Do this step in a separate line of code.)
// // Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"

// myPenguin.chirp = function() {
//     console.log("CHIRP CHIRP! Is this what penguins sound like?")
// };
// myPenguin.chirp();





// // 3.





// // We’re at a nutrition center, and we have the data from our customers ( name, gender, height, weight). 

// // Write a JS script that prints in browser Console the following info for each user: 

// // John Doe | M | BMI: 24 | Normal Weight 

// // Mary Anne | F | BMI: 30 | Obese BMI 

// // formula: BMI = x KG / (y M * y M) x=bodyweight in KG y=height in m 

// // ● If your BMI is less than 18.5, it falls within the underweight range. 

// // ● If your BMI is 18.5 to <25, it falls within the normal. 

// // ● If your BMI is 25.0 to <30, it falls within the overweight range.

// // ● If your BMI is 30.0 or higher, it falls within the obese range.





// const customerM = {
//     name: 'John Doe', 
//     gender: 'M',
//     height: 1.92,
//     weight: 90
// }

// const customerW = {
//     name: 'Mary Anne',
//     gender: 'F',
//     height: 1.67,
//     weight: 70

// }

// let bmiM = customerM.weight / (customerM.height * customerM.height)
// let valBmiM

// if (bmiM < 18.5) {
//     valBmiM = 'underweight'
// } else if ( bmiM > 18,5 && bmiM < 25){
//     valBmiM = 'normal'
// } else if ( bmiM > 25 && bmiM < 30){
//     valBmiM = 'overweight'
// } else if( bmiM > 30){
//     valBmiM = 'obese'
// }
    
// let bmiW = customerW.weight / (customerW.height * customerW.height)
// let valBmiW

// if (bmiW < 18.5) {
//     valBmiW = 'underweight'
// } else if ( bmiW > 18,5 && bmiW < 25){
//     valBmiW = 'normal'
// } else if ( bmiW > 25 && bmiW < 30){
//     valBmiW = 'overweight'
// } else if( bmiW > 30){
//     valBmiW = 'obese'
// }

// console.log(customerM.name, customerM.gender, bmiM, valBmiM)
// console.log(customerW.name, customerW.gender, bmiW, valBmiW)





////Challenges

// for (var i = 1; i <= 20; i++ ){
// console.log(i);
// }


// for (var i=1; i<=20; i++){
//     if(i%2==0)
//     console.log(i);
// }




// let myArray = [2, 13, 22, 18, 9]
//     let sum = 0;
//     for (let i= 0; i < myArray.length; i++) {
        
//         sum += myArray[i]
//     } 
//     console.log(sum)




//     const numbers = [1,10,15,11,23,27,29]
// console.log(Math.max(...numbers))





// const nrArr = [1,2,4,1,2,5,1,3,1,2];  

// function countInArray(array, num) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === num) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countInArray(nrArr, 2));
// console.log(countInArray(nrArr, 1));




