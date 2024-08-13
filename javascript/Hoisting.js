let a = 100;



function a1(){
    function b1(){
        console.log(a)
    }
    return b1;
}

let res  = a1();

res()
