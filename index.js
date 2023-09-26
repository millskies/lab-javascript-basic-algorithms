// Iteration 1: Names and Input

let hacker1 = 'David'
console.log(`The drivers name is ${hacker1}`)
let hacker2 = 'Lucia'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if  (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  }
  else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
 //3.1
let name = hacker1.split('')
let formattedName = name.map(char => char.toUpperCase()).join(' ')
console.log(formattedName)

//3.2
console.log(name.reverse().join(''))

//3.3
if (hacker1 > hacker2){
  console.log(`The driver's name goes first.`)
}
else if (hacker2 > hacker1){
  console.log(`Yo, the navigator goes first, definitely.`)
}
else if (hacker1 == hacker2){
  console.log(`What?! You both have the same name?`)}
