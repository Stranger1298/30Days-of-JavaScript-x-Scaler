function memo(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
        console.log("Value stored -", args);
        return cache[key];
        }
        const result = func(...args);
        cache[key] = result;
        console.log("Calculating -", args);
        return result;
    };
}
function add(a, b) {
    return a + b;
}
const memoizedAdd = memo(add);
console.log(memoizedAdd(2,3));