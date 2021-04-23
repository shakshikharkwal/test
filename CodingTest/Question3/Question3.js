/*Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive.
 Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.*/
 for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        console.log("Repeated number is", a[i]);
        break;
      }
    }
  }