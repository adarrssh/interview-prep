function x(){
    for(var i = 1 ; i<=5; i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }

    console.log("Namaste Javascript")
}

x()

// output ::
//Namaste Javascript
// 6
// 6
// 6
// 6
// 6

// function x1(){
//     for(var i = 1 ; i<=5; i++){

//         function close(i){

//             setTimeout(()=>{
//                 console.log(i)
//             },i*1000)
//         }

//         // this creates a copy of i (value)
//         close(i)
//     }

//     console.log("Namaste Javascript")
// }

// x1()




// *******************


