// Define a constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Add methods to the prototype
  Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  };
  
  // Create an instance of the class
  const person1 = new Person('John', 'Doe');
  console.log(person1.fullName()); // Output: John Doe

// Define a class using the class syntax
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  // Create an instance of the class
  const person2 = new Person('Jane', 'Doe');
  console.log(person2.fullName()); // Output: Jane Doe

  
  // stack 

// In JavaScript, the static keyword is used to define a static method or property for a class. Static methods and properties are associated with the class itself rather than with instances of the class. This means that they can be accessed directly on the class without the need to create an instance.

class MyClass {
    constructor(value) {
      this.value = value;
    }
  
    // Instance method
    printValue() {
      console.log(this.value);
    }
  
    // Static method
    static greet() {
      console.log('Hello from MyClass!');
    }
  }
  
  // Accessing static method directly on the class
  MyClass.greet(); // Output: Hello from MyClass!
  
  // Creating an instance of MyClass
  const obj = new MyClass(42);
  
  // Accessing instance method
  obj.printValue(); // Output: 42
  



/**

  class D {
      static stMeth() {
          l("static method stMeth on D")
      }
      meth() {
          l("method on D")
      }
      static staticProp = 78
  }


  function D() {}
    D.prototype.meth = function () {
            l("method on D")
    }
    D.stMEth = function() {
            l("static method stMeth on D")    
    }
    D.staticProp = 78
  }

 *
 */
