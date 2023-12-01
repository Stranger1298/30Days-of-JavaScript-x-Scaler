function getData() {
    const apiUrl1 = 'https://jsonplaceholder.typicode.com/users';
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/users';
    let data1;
    return fetch(apiUrl1)
      .then(response1 => {
        if (!response1.ok) {
          throw new Error(`Failed to fetch data from ${apiUrl1}`);
        }
        return response1.json();
      })
      .then(parsedData1 => {
        data1 = parsedData1;
        return fetch(apiUrl2);
      })
      .then(response2 => {
        if (!response2.ok) {
          throw new Error(`Failed to fetch data from ${apiUrl2}`);
        }
        return response2.json();
      })
      .then(data2 => {
        const combinedResult = {
          data1: data1,
          data2: data2
        };
        return combinedResult;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  getData().then(combinedResult => {
    console.log('Combined Result:', combinedResult);
  });
  