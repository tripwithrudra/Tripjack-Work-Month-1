
function varExample() {
    var greeting = "Hello";
    
    if (true) {
        var greeting = "Hi"; // Re-declaring and updating within the same function
        console.log(greeting); // Output: "Hi"
    }
    
    console.log(greeting); // Output: "Hi" (due to function-scoping, it overwrites the previous value)
}

varExample();

function letExample() {
    let greeting = "Hello";

    if (true) {
        let greeting = "Hi"; // Block-scoped, this is a different 'greeting' inside the block
        console.log(greeting); // Output: "Hi"
    }

    console.log(greeting); // Output: "Hello" (the 'greeting' inside the block doesn't affect this one)
}

letExample();


function constExample() {
    const greeting = "Hello";

    if (true) {
        const greeting = "Hi"; // Block-scoped, separate constant within this block
        console.log(greeting); // Output: "Hi"
    }

    console.log(greeting); // Output: "Hello" (the 'greeting' inside the block doesn't affect this one)

    // greeting = "Hey"; // This would cause an error because 'const' cannot be reassigned
}

constExample();



var x = 0;
var y = 23;

// All values except false, 0, 0n, -0, “”, null, undefined, and NaN 
// are truthy values.
if(x) { console.log(x) }   
// The code inside this block will not run 
// since the value of x is 0(Falsy)  
        
if(y) { console.log(y) }    
// The code inside this block will run 
// since the value of y is 23 (Truthy)

