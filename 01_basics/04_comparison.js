// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*The reason is that an equity checker == and comparison > < >= <= work differently
Comparison converts null to a number, treating it as 0.
That's why (3) null>=0 is true and (1) null>0 is false 
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === -> strict check

console.log("2" == 2);