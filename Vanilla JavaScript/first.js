
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
