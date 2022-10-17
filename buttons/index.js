// setTimeout(() => {console.log('Roman')},5000)

// alert('Roman')

// Оголошення змінних: var - old, let, const
let number

// Типи змінних:
// String "" '' `` ('Roman', '1', 'abd123')
// Number 1, 2, ...
// BigInt 
// Boolean true / false
// null
// undefined
// Symbol
// Object

// Objects {}
// Functions
// Arrays []
function add(a, b) {
  return a + b
}
const add1 = (a, b) => a + b
console.log(add('1', 2))

let array = [false, 2, '3', 4, add(5, 5), !false, 7]
console.log(array)

let object = {
  name: 'Roman',
  age: 32,
  car: 'Honda',
  active: false
}
console.log(object)

console.clear()
let name = 'Roman'
console.log(name)
name = 'Ihor'
console.log(name)
name = 1
console.log(name)

console.clear()
const age = 32
console.log(age)
// age = 31
console.log(age)

const someArray = [1, 2, 3]
someArray.push(4)
someArray.unshift(0)
console.log(someArray)
