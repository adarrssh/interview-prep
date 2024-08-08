
// let postData = {
//     id: '1',
//     name: 'Google Pixel 6 Pro',
//     data: { color: 'Cloudy White', capacity: '128 GB' }
//   }


// fetch("https://api.restful-api.dev/objects")
// .then(res=> res.json())
// .then(parseJson=>{
//     console.log('...........    ',parseJson[0])
//     console.log("inside fetch")

// })
// .catch(err=>{console.log(err)})

// const options = {
//     method: 'POST', 
//     headers: {
//         'Content-Type': 'application/json' 
//     },
//     body: JSON.stringify(postData) 
// };


// console.log("in between fetches ")

// fetch("https://api.restful-api.dev/objects",options)
// .then(res=> res.json())
// .then(parseJson=>{console.log(parseJson)})
// .catch(err=>{console.log(err)})

let postData = {
    id: '1',
    name: 'Google Pixel 6 Pro',
    data: { color: 'Cloudy White', capacity: '128 GB' }
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
};

fetch("https://api.restful-api.dev/objects")
    .then(res => res.json())
    .then(parseJson => {
        console.log('...........    ', parseJson[0])
        console.log("inside fetch")

        fetch("https://api.restful-api.dev/objects", options)
            .then(res => res.json())
            .then(parseJson => { console.log(parseJson) })
            .catch(err => { console.log(err) })

    })
    .catch(err => { console.log(err) })





