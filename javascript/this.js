// "use strict"
const obj1  = {
    a:10,
    x: function(){
        return ()=> console.log(this)
    }
}

const obj2  = {
    a:10,
    x:  function () {
        console.log(this)
    }
}

// obj1.x()()
// obj2.x()

function regularFunction() {
    const a = () => { console.log(this); }
    a(); // Output: { regularFunction: [Function: regularFunction] }
}
regularFunction();
