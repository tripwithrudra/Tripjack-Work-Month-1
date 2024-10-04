
// function varExample() {
//     var greeting = "Hello";

//     if (true) {
//         var greeting = "Hi"; // Re-declaring and updating within the same function
//         console.log(greeting); // Output: "Hi"
//     }

//     console.log(greeting); // Output: "Hi" (due to function-scoping, it overwrites the previous value)
// }

// varExample();

// function letExample() {
//     let greeting = "Hello";

//     if (true) {
//         let greeting = "Hi"; // Block-scoped, this is a different 'greeting' inside the block
//         console.log(greeting); // Output: "Hi"
//     }

//     console.log(greeting); // Output: "Hello" (the 'greeting' inside the block doesn't affect this one)
// }

// letExample();


// function constExample() {
//     const greeting = "Hello";

//     if (true) {
//         const greeting = "Hi"; // Block-scoped, separate constant within this block
//         console.log(greeting); // Output: "Hi"
//     }

//     console.log(greeting); // Output: "Hello" (the 'greeting' inside the block doesn't affect this one)

//     // greeting = "Hey"; // This would cause an error because 'const' cannot be reassigned
// }

// constExample();



// var x = 0;
// var y = 23;

// // All values except false, 0, 0n, -0, “”, null, undefined, and NaN 
// // are truthy values.
// if(x) { console.log(x) }   
// // The code inside this block will not run 
// // since the value of x is 0(Falsy)  

// if(y) { console.log(y) }    
// // The code inside this block will run 
// // since the value of y is 23 (Truthy)

// function abcd() {
//     var a = 12;
//     function bcd() {
//         var b = 43;
//     }
//     // console.log(b); Error
// }
// abcd();


// // Copy reference values

// var a = [2, 3, 4, 10];

// var b = a; // b is a reference to a
// b[0] = 5; // b and a are both changed

// var c = [4, 5, 1, 5];
// var d = [...c]; // d is a copy of c
// d[0] = 6; // only d is changed


// Event Bubbling

// const bodyContainer = document.getElementById("box")
// const div = document.getElementById("div")
// const span = document.getElementById("span")
// const button = document.getElementById("button")
// const button2 = document.getElementById("button2")

// bodyContainer.addEventListener('click', () => {
//     console.log("body was clicked")
// })

// div.addEventListener('click', () => {
//     console.log("div was clicked")
// })

// span.addEventListener('click', () => {
//     console.log("span was clicked")
// })

// button2.addEventListener('click', () => {
//     console.log("button2 was clicked")
// })

// // Prevent Event Propagation (Bubbling)


// button.addEventListener('click', (event) => {
//     event.stopImmediatePropagation()
//     console.log("button was clicked")
// })

console.log(a);

if (a) console.log("True");
else console.log("False");


var a = 12;

const arr = [2, 5, 35, 3, 5];
arr.reduce((a, b) => a + b, 0);

// acc  current     result
//  0     2          2
//  2     5          7
//  7     35         42
//  42    3          45
//  45    5          50

const items = [
    { "id": 1, "name": "sumit" },
    { "id": 2, "name": "sumit1" },
    { "id": 3, "name": "sumit2" },
    { "id": 4, "name": "sumit3" },
    { "id": 5, "name": "sumit4" },
    
]

const filter_arr = items.filter(items=>items.id > 3);
console.log("Filtered Array", filter_arr);

const arr2 = [2, 5, 35, 3, 5];
const newArray = arr2.filter((a, b) => {
    return a > b;  // Return true if element 'a' is greater than its index 'b'
});

console.log(arr2);
console.log(newArray);
