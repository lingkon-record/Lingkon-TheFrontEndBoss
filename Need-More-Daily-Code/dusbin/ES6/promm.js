// Simulate an asynchronous API call that resolves after a delay
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: 'Data fetched successfully!' };
        // Simulate a successful response
        resolve(data);
        // Simulate an error response
        // reject('Error fetching data');
      }, 4000); // Simulate a 4-second delay
    });
  }
  
  // Using the Promise to fetch and process data
  console.log('Fetching data...');
  
  fetchData()
    .then((result) => {
      console.log('Data received:', result.message);
      // You can return another Promise here for further processing if needed
      return result.message.toUpperCase();
    })
    .then((uppercaseMessage) => {
      console.log('Uppercase message:', uppercaseMessage);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    .finally(() => {
      console.log('Finished fetching data.');
    });
  