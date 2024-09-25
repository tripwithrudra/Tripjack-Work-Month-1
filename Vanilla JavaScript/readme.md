# JavaScript Notes
### Difference between var and let vs const keyword in javascript.

1. var
- Function-scoped or globally-scoped, can be re-declared and updated
- However, it allows for re-declaration and overwriting, which can lead to issues like unintended behavior when using loops or conditionals.

2. let 
- Block-scoped, can be updated but not re-declared within the same block

3. const 
- Block-scoped, cannot be re-declared or updated

#### In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

<hr>

### ==
- Double Equal checks for value.
### ===
- Triple equal checks for value and type of the compared variables

<hr>
