function createUser(username,score){
    // in this code, this refers to the object that is being invoked
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

// this won't be able to use increment and printMe method
// const chai = createUser("chai",25)
// this will 
const chai = new createUser("chat",25)

/**
 Here's what happens behind the scenes when the new keyword is used:
A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor.
JavaScriot assumes this, the newly created object. to the intended return value

 * 
 * 
*/


// inheritance 

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailabale : false 
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime : true ,
    __proto__ : TeachingSupport
}

// or 
// Object.setPrototypeOf(TASupport,TeachingSupport)

// function constructor 


// JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, 
// Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, 
// which enables all the other objects to inherit these methods and properties.

// Proto: It is an actual object that provides a way to inherit properties from JavaScript with the help of an object which is created with new. 
// Every object with behavior associated has internal property [[prototype]].
