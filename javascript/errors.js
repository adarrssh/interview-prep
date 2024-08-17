// Types of Errors in JavaScript:
// Syntax Errors:

// Syntax errors occur when the JavaScript parser encounters code that does not conform to the language's rules. These errors are similar to what other languages would consider "compile-time errors," but in JavaScript, they occur before the script runs.
// Example:
// javascript
function helloWorld() {
    console.log("Hello, World!");
}
// This code will cause a syntax error because of the missing closing parenthesis ).
// Runtime Errors:

// These errors occur when the script is running and something goes wrong, such as trying to access an undefined variable or performing an illegal operation.
// Example:
// javascript
const obj = null;
console.log(obj.property);  // This will throw a TypeError at runtime
// Reference Errors:

// These occur when you try to access a variable that hasn’t been declared.
// Example:
// javascript
console.log(x);  // This will throw a ReferenceError since x is not defined