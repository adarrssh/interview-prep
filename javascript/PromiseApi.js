// Promise.all 
//  sucees -> wait for all api calls
//  Error -> incase of error in any api call, it will stop the execution and throw the error 


// Promise.allSettled 
// wait for all apis to settle, even if some of the api fails

// Promise.race
// return the promise of first settled promise ( it can be either error or success)

// Pomise.any
// return the first success promisef

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("P1 resolved")
//     },10000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("P2 resolved")
//     },5000)
// })

// async function handlePromise(){
//     console.log("Hello world")

//     const val = await p1;
//     console.log("after p1 resolved")
//     console.log(val)

//     const val1 = await p2;
//     console.log("after p2 resolved")
//     console.log(val1,val)

// }

// handlePromise()

// async function p1(){
//     setTimeout(()=>{
//         console.log("P1 resolved")
//     },10000)
// }

// async function p2(){
//     setTimeout(()=>{
//         console.log("P2 resolved")
//     },5000)
// }


// async function handlePromise(){
  
//     await p1()

//     console.log("after p1")

//     await p2()

//     console.log("after p2")
// }

// handlePromise()

// p1.then((data)=>{
//     console.log(data)
// })

// p2.then((data)=>{
//     console.log(data)
// })

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P1 resolved")
    },8000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P2 resolved")
    },4000)
})

async function handlePromise(){

    const val = await p1;
    console.log(val)

    const val1 = await p2;
    console.log(val1)
    console.log("Hello world")

}

async function handlePromiseUsingThen(){

    p1.then((res)=>{
        console.log("then"+res)
    })


    p2.then((res)=>{
        console.log("then"+res)
    })

    console.log("Hello world")

}

async function handlePromiseUsingNesteedThen(){

    p1.then(async (res)=>{
        console.log("hey")
        console.log("then"+res)

        p2.then((res)=>{
            console.log("then"+res)
        })

        const firstResponse = await fetch("https://api.restful-api.dev/objects");
        const [first] = await firstResponse.json()
        console.log(first)

        p2.then((res)=>{
            console.log("then"+res)
        })

    })


    console.log("Hello world")

}

// handlePromise()
// handlePromiseUsingThen()
handlePromiseUsingNesteedThen()
