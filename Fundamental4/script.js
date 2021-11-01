

// 2:- Javascript Array Method

// Define an array of fruits
const fruits = ['mango', 'apple', 'banana', 'grapes']
console.log(fruits)

// 2.1 :- toString() Method
// converts the array to string
console.log(fruits.toString())

// 2.2 :- join() method
// It behaves just like toString() method, but in addition you can specify the separator
console.log(fruits.join(" * "))

// 2.3:- pop() method
// To remove the item from array, pop() method is used.
console.log(fruits.pop()) // It removes the last item
console.log(fruits) // Prints the remaining fruit

// 2.4:- push() method
// To add new item in the array, push() method is used.
fruits.push("TOMATO", "APPLE") // It adds the new element at the end of the array
console.log(fruits)

// 2.5:- shift() method
// shift() method removes the first element from the array
// our new array consits of "mango, 'apple, 'banana', 'TOMATO', 'APPLE'"
fruits.shift() // It will remove mango
console.log(fruits)

// 2.6:- unshift() method
//  unshift() method add the new element in the begining
fruits.unshift("Watermelog")
console.log(fruits)