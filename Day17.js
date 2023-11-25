function isEven(n) {
    return n%2 == 0
}
function filterOutOdd(numbers) {
    return numbers.filter(isEven);
}
console.log(filterOutOdd([2,3,4,5,6,7,8,9]));