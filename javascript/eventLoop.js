fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(json => console.log(json))
      
console.log('hey')
abc()

for(let i = 0 ; i<100000;i++){
    console.log('a')
}

function abc(){
    console.log('abc')
}

// java -> synchrnous
// event loop -> fundamental mechanism that enables the asnychronous 
// execution of the code

// fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => response.json())
//       .then(json => console.log(json))
