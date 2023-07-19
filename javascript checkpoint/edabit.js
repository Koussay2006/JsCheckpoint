//How Edabit Works:
/*
function hello() {
    return "hello edabit.com"
}
*/


//Return the Sum of Two Numbers:
/*
function addition(a, b) {
  return a + b;
}

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));
*/


//Bitwise Operations:
/*
function bitwiseAND(a, b) {
  return a & b;
}

function bitwiseOR(a, b) {
  return a | b;
}

function bitwiseXOR(a, b) {
  return a ^ b;
}

console.log(bitwiseAND(6, 23).toString(2).padStart(8, '0'));
console.log(bitwiseOR(6, 23).toString(2).padStart(8, '0'));
console.log(bitwiseXOR(6, 23).toString(2).padStart(8, '0'));
*/


//How Much is True?:
/*
function countTrue(arr) {
  let trueCount = 0;
  for (const value of arr) {
    if (value === true) {
      trueCount++;
    }
  }
  return trueCount;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
*/


//Convert Minutes into Seconds:
/*function convert(minutes) {
  return minutes * 60;
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));
*/


//Add up the Numbers from a Single Number:*
/*
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
*/

//Area of a Triangle:
/*
function triArea(base, height) {
  return (base * height) / 2;
}

console.log(triArea(3, 2));
console.log(triArea(7, 4));
console.log(triArea(10, 10));
*/


//Matchstick Houses:
/*
function matchHouses(step) {
    return 5 * step + 1;
  }
  
  console.log(matchHouses(1));
  console.log(matchHouses(4));
  console.log(matchHouses(87));
*/


//Return the Next Number from the Integer Passed:
/*
function addition(number) {
  return number + 1;
}

console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));
*/


//Convert Age to Days:
/*
function calcAge(ageInYears) {
  return ageInYears * 365;
}

console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));
*/


//A Redundant Function:
/*
function redundant(str) {
  return function() {
    return str;
  };
}

const f1 = redundant("apple");
console.log(f1()); // Output: "apple"

const f2 = redundant("pear");
console.log(f2()); // Output: "pear"

const f3 = redundant("");
console.log(f3()); // Output: ""s
*/


//RegEx Exercise: An empty string:
/*
const REGEXP = /^$/;

console.log(REGEXP.test(""));
console.log(REGEXP.test("Hello"));
console.log(REGEXP.test("123"));
console.log(REGEXP.test(" "));
*/


//Right Shift by Divisions:
/*
function shiftToRight(x, y) {
  return Math.floor(x / Math.pow(2, y));
}

console.log(shiftToRight(80, 3));
console.log(shiftToRight(-24, 2));
console.log(shiftToRight(-5, 1));
console.log(shiftToRight(4666, 6));
console.log(shiftToRight(3777, 6));
console.log(shiftToRight(-512, 10));
*/


//Return the First Element in an Array:
/*
function getFirstValue(arr) {
  return arr[0];
}

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));
*/