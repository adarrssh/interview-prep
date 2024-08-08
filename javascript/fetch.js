// if an api request is completed, fetch will see that as a success regardless of the response,
// so to tackle with that issue we can use response.ok to check whether the response was bwetween 200-299

// Make a GET request using the Fetch API

async function getReq() {
    const apiUrl = 'https://www.googleapis.com/fitness/v1/users/me/dataSources';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Specify the API endpoint for user data
const apiUrl = 'https://api.example.com/users/123';

// Make a GET request using the Fetch API
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(userData => {
//     // Process the retrieved user data
//     console.log('User Data:', userData);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// API endpoint for creating a new user

// Form data to be sent in the request body
const formData = {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'securepassword123',
};



// Make a POST request using the Fetch API
// fetch(apiUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(formData),
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(newUserData => {
//     // Process the newly created user data
//     console.log('New User Data:', newUserData);
//   })
//   .catch(error => {
//     console.error('Error:', error);
// });




  // API endpoint for fetching recent users
const queryParams = {
  timeframe: '30days',
  timefram1e: '30day1s',
};

// Convert query parameters to a string
const queryString = new URLSearchParams(queryParams).toString();

console.log(queryString)

// Combine API endpoint with query parameters
const fullUrl = `${apiUrl}?${queryString}`;

console.log(fullUrl)