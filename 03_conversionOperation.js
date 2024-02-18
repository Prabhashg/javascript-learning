let score1 = "33"

console.log(typeof score1)              // string
console.log(typeof(score1))             // string

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)       // number
console.log(valueInNumber)              // 33

let score2 = "33abc"

console.log(typeof score2)              // string

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)      // number
console.log(valueInNumber2)             // NaN


let score3 = null

console.log(typeof score3)              // object

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)      // number
console.log(valueInNumber3)             // 0


// Number conversions
// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0
// null => 0
// undefined => NaN

// Boolean conversions
// 25 => true
// 0 => false
// "" => false          // empty string -> false
// "something" => true


