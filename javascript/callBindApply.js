// let name = {
//     firstName : 'adarsh',
//     lastName : 'kumar',
//     printFullName : function(){
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

// name.printFullName()

// let name2 = {
//     firstName : 'john',
//     lastName : 'doe'
// }

// // borrow function 
// name.printFullName.call(name2)



// let name = {
//     firstName: 'adarsh',
//     lastName: 'kumar'

// }

// let printFullName = function () {
//     console.log(this.firstName + " " + this.lastName)
// }


// let name2 = {
//     firstName: 'john',
//     lastName: 'doe'
// }

// printFullName.call(name2)




// extra arguemets 
// let printFullName = function (hometown) {
//     console.log(this.firstName + " " + this.lastName + " " + "from " + hometown)
// }

// printFullName.call(name2,"russia")




// apply
let name2 = {
    firstName: 'john',
    lastName: 'doe'
}

// printFullName.call(name2)


let printFullName = function (hometown,age) {
    console.log(this.firstName + " " + this.lastName + " " + "from " + hometown + " age: " + age)
}


printFullName.apply(name2,["nyc","16"])


// bind

let obj = printFullName.bind(name2,"nyc","9")

