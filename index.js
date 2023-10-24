//CHALLENGE 1

// function countByTwo() {
//   for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
//   }
// }

// console.log(countByTwo(10));

//CHALLENGE 2

// function removeByIndex(array, items) {
//   const result = [];

//   for (const item of items) {
//     if (item >= 0 && item < array.length) {
//       result.push(array[item]);
//     }
//   }
//   return result;
// }

// const myArray = ["a", "b", "c", "d", "f", "f", "e", "f"];
// const itemsToRemove = [1, 5];

// const extractedValues = removeByIndex(myArray, itemsToRemove);
// console.log(extractedValues);

//CHALLENGE 3

// function numToArray(numbers) {
//   return numbers.toString().split("").map(Number);
// }

// console.log(numToArray(12345));

//CHALLENGE 4

// const arrayOne = [1, 2, 3];
// const arrayTwo = ["a", "b", "c", "d"];

// const results = [];

// function newMatrix(arrayOne, arrayTwo) {
//   for (const num of arrayOne) {
//     for (const item of arrayTwo) {
//       results.push([num, item]);
//       results.push([item, num]);
//     }
//   }
//   return results;
// }

// console.log(newMatrix(arrayOne, arrayTwo));
