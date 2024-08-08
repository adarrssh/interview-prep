async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

// get with headers
axios
    .get(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=150&height=1.83`, {
        headers: {
            'X-RapidAPI-Key': 'your-rapidapi-key',
            'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
        },
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });




const {res} = await axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone',
    orders: [1, 2, 3]
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
})

const queryParams = {
    page: 1,
    limit: 10
};




// query params 
const data = {
    name: 'John',
    age: 30
};

const headers = {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
};

const response = await axios.post('https://api.example.com/data', data, {
    params: queryParams,
    headers: headers
});

