function throttle(func, interval) {
    let lastInvocationTime = 0;
    return function (...args) {
      const currentTimestamp = Date.now();
      if (currentTimestamp - lastInvocationTime >= interval) {
        const result = func.apply(this, args);
        lastInvocationTime = currentTimestamp;
        return result;
      } else {
        console.log(`Function '${func.name}' invoked.`);
      }
    };
  }
  function myFunction() {
    console.log("Function called!");
  }
  const throttledFunction = throttle(myFunction, 2000);
  for (let i = 0; i < 5; i++) {
    throttledFunction();
    setTimeout(() => {}, 1000);
  }
  