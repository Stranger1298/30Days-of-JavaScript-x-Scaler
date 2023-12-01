async function asyncLoop(arr, asyncFunction) {
    for (const element of arr) {
      await asyncFunction(element);
    }
  }
  async function asyncOperation(element) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Processed element: ${element}`);
        resolve();
      }, 1000);
    });
  }
  const myArray = [1, 2, 3, 4, 5];
  asyncLoop(myArray, asyncOperation)
    .then(() => {
      console.log('All asynchronous operations completed.');
    })