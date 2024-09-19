/////////////// 1 - masala ///////////////

// function longestPalindromicSubstring(str) {
//   let bigArr = str.split(" ");
//   let newArr = [];
//   for (let i = 0; i < bigArr.length; i++) {
//     let arr = bigArr[i].split("");
//     let arr2 = bigArr[i].split("").reverse();
//     let result = "";
//     for (let k = 0; k < arr.length; k++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if (arr[k] === arr2[j] && k == j) {
//           result += arr[k];
//         }
//       }
//     }
//     newArr.push(result);
//   }
//   let longString = "";
//   for (let string of newArr) {
//     if (string.length > longString.length) {
//       longString = string;
//     }
//   }
//   return longString;
// }
// console.log(longestPalindromicSubstring("babad level"));

/////////////// 2 - masala ///////////////

// function rotateArray(arr, num) {
//   let result = arr.splice(0, num);
//   return arr.concat(result);
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2));

/////////////// 3 - masala ///////////////

// function findTwoSum(arr, sum) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] == sum) {
//         return [i, j];
//       }
//     }
//   }
// }
// console.log(findTwoSum([2, 7, 11, 15], 9));

/////////////// 4 - masala ///////////////

// function myFunc(arr, sum) {
//   let result = arr.reduce((a, b) => a + b);
//   let res = false;
//   if (result == sum) {
//     res = true;
//   }
//   return res;
// }
// console.log(myFunc([2, 4, 1], 7));

/////////////// 5 - masala ///////////////

// function myFunc(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       newArr.push(arr1[i]);
//       newArr.push(arr2[i]);
//     }
//   }
//   return newArr;
// }
// console.log(myFunc([2, 4, 1], [2, 3, 8]));

/////////////// 6 - masala ///////////////

// function mostFrequentElement(Array) {
//   let obj = {};
//   let arr = [];
//   let arr2 = [];
//   for (let i = 0; i < Array.length; i++) {
//     let res = Array[i];
//     if (obj[res]) {
//       obj[res]++;
//     } else {
//       obj[res] = 1;
//     }
//   }
//   for (let key in obj) {
//     arr.push(obj[key]);
//     arr2.push(key);
//   }
//   let max = Math.max(...arr);
//   let num = arr.indexOf(max);
//   return parseInt(arr2[num]);
// }
// console.log(mostFrequentElement([1, 2, 3, 1, 3, 1]));

/////////////// 7 - masala ///////////////

// function incrementDigits(str) {
//   let arr = str.split("");
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (!Number.isNaN(parseInt(arr[i]))) {
//       let res = parseInt(arr[i]) + 1;
//       result += `${res}`;
//     } else {
//       result += arr[i];
//     }
//   }
//   return result;
// }
// console.log(incrementDigits("4abc123"));

/////////////// 8 - masala ///////////////

// function longestIncreasingSubarray(arr) {
//   let newArr = [];
//   let res = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (res <= arr[i]) {
//       res = arr[i];
//     } else {
//       newArr.push(arr.splice(0, i));
//     }
//   }
//   for (let i = 0; i < newArr.length; i++) {
//     newArr[i] = newArr[i].length;
//   }
//   return newArr;
// }
// console.log(longestIncreasingSubarray([10, 20, 30, 10, 40, 50, 52, 55, 6]));

/////////////// 9 - masala ///////////////

// function countOccurrences(Array) {
//   let obj = {};
//   let arr = [];
//   let arr2 = [];
//   for (let i = 0; i < Array.length; i++) {
//     let res = Array[i];
//     if (obj[res]) {
//       obj[res]++;
//     } else {
//       obj[res] = 1;
//     }
//   }
//   return obj;
// }
// console.log(countOccurrences([1, 2, 2, 3, 4, 4, 4, 5]));

/////////////// 10- masala ///////////////

// function matrixSum(arr) {
//   let res = arr.flat(Infinity);
//   let sum = res.reduce((a, b) => a + b);
//   return sum;
// }
// console.log(
//   matrixSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );