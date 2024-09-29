// Make a POST request to a URL
fetch('https://fake-json-api.mock.beeceptor.com/users', {
    method: 'POST', // Specify the request method
    headers: {
      'Content-Type': 'application/json' // Specify content type
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }) // Convert the data to a JSON string
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text(); // Parse the JSON from the response
    })
    .then(data => {
      console.log(data); // Do something with the data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
