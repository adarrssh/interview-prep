// rest -> 1. take a variable number of arguments
// 2. any number of arguments will be converted into an array using the rest parameter

function restFunc(...args){
    let sum = 0
    let i = 0

    while(i<args.length){
        sum += args[i]
        i++
    }

    return sum
}

console.log(
    restFunc(1,2,3,4)
)


// speard -> use to spread an array and object

function addNum(num1,num2,num3,num4){
    console.log( num1 + num2+ num3+ num4 )
}

let arr = [1,2,3,4]
addNum(...arr)