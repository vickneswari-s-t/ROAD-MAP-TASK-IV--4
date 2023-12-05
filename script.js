// check output in console.
// Programs in anonymous function &IIFE

// a) print odd numbers in an array
function oddnum1(oddNumberarray) {
  let oddnum1 = [];
  for (let i = 0; i < oddNumberarray.length; i++) {
    if (oddNumberarray[i] % 2 !== 0) {
      oddnum1.push(oddNumberarray[i]);
    }
  }
  return oddnum1;
};
console.log(oddnum1([1, 22, 33, 568, 43, 66, 88]));

//  IIFE:
let result1 = [];
(function (array1) {
  let result1 = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 !== 0) {
      result1.push(array1[i]);
    }
  }
  console.log(result1.sort());
})([5, 11, 56, 76, 87, 1, 8, 23])

// // 2.a)arrow function:

const numbers = [-2, 3, -5, 7, -4];
const oddnumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddnumbers);


// b.convert all the strings to title caps in a string array
// // Anonymous
let name = function (string) {
  string = string.toLowercase().split('');
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).touppercase() + string[i].slice(1);
    string[i].slice(1);
  }
  return string.join('');
}
console.log("Hi,This is the string title caps");

// IIFE

function titlecase(string1) {
  string1 = string1.toLowerCase().split(' ');
  for (let i = 0; i < string1.length; i++) {
    string1[i] = string1[i].charAt(0).toUpperCase() + string1[i].slice(1);
  }
  return string1.join(' ');
}
console.log(titlecase("good is guvi"));
// 2.b arrow functions:

titlecase = (string3) => {
  string3 = string3.toLowerCase().split(' ');
  for (var i = 0; i < string3.length; i++) {
    string3[i] = string3[i].charAt(0).toUpperCase() + string1.slice(1);
  }
  return (string3.join(' '));
}
console.log("this is example of arrow ftn");

// c)sum of all numbers in an array
//  anonymous function

var total = function (array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
}
console.log(total([11, 22, 33, 44, 55, 66, 77, 88, 99]));

//  IIFE

(function (array) {
  var sum = 0;
  for (var i = 0; i < array.lenght; i++) {
    sum = sum + array[i];

  }
  console.log(sum);
})([1, 2, 3, 4, 5, 6])
// 2.b arrow function:
const array6 = [3, 7, 9];
const sum = 8;
const findsum = (array6, sum) =>
  array6.some((set => n =>
    set.has(n) || !set.add(sum - n))(new set));
console.log(findsum(array6, sum));

// // //d. return all prime number in an array

// anonymous function:
let prime = function (newarray) {
  newarray = newarray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(newarray);
}([1, 2, 3, 4, 5, 6, 7])
  // // // IIFE

  (function (numarray) {
    numarray = numarray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;

    });
    console.log(numarray);
  })([1, 2, 3, 4, 5])

// // // o/p- 1,2,3,5;

// arrow function:
let primeArrow1 = (numarray1) => {
  numarray1 = numarray1.filter((number1) => {
    for (var i = 2; i <= Math.sqrt(number1); i++) {
      if (number1 % i === 0) return false;
    }
    return true;

  });
  console.log(numarray1);
}
primeArrow1(([1, 2, 3, 4, 5]));


// // // e.return all the palindrome in an array
// // // anonymous
function ispalindrome(arr, n) {
  for (let i = 0; i < n; i++) {
    let ans = ispalindrome(arr[i]);
    if (ans == false)
      return false;
  }
  return true;
}

// IIFE:

(function (arrr, n) {
  for (let i = 0; i < n; i++) {
    let ans = ispalindrome1(arrr[i]);
    if (ans == false)
      return false;
  }
  return true;
})([1, 2, 3], 2)

// arrow function
function ispalindrome2(N) {
  let str3 = "" + N;
  let len = str3.len;
  for (let i = 0; i < parseInt(len / 2, 10); i++) {
    if (str3[i] != str3[len - 1 - i])
      return false;
    return true;
  }
}


// // // f.return median of two sorted arrays of the same size

//anonymous


// let arr6 = [1, 3, 6];
// let arr7 = [2, 4, 7];
// let findmerdiantwosortedarrays = function (arr6, arr7) {
//   let arr6 = [...arr6, ...arr7];
//   arr6.sort = ((a, b) => a - b);
//   let n = arr.length;
//   return n % 2 == 0 ? (arr6[n / 2] + arr6[n / 2 - 1]) / 2.[Math.floor(n / 2
// )]}
// console.log(findmerdiantwosortedarrays(arr6, arr7));


//IIFE
const arr8 = [1, 12, 15, 26, 38];
const arr9 = [2, 13, 17, 30, 45, 47];
console.log(median(arr8, arr9));

// // // g.remove the duplicate from array
// // // anonymous
let arr4 = ['A', 'B', 'C', 'D', 'E', 'C'];
function removeDuplicate(arr4) {
  return arr4.filter((item,
    index) => arr4.indexOf(item) === index);
}
console.log(removeduplicate(arr4));

// IIFE
let chars = ['A', 'B', 'C', 'D', 'E', 'C'];
let uniquechars = [...new Set(chars)];
console.log(uniquechars);


