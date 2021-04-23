/*Define an array of numbers (use any random numbers). Write a program in Javascript to print only the even numbers of
 the array. Do not use any library functions, need to do via for loops only*/

function findEvenNumbers(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      arr.push(array[i]);
    }
    return arr;
  }
}