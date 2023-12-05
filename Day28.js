function calculateTotal(numbersArray) {
var filterNumbers=numbersArray.filter(number => number % 2 !=0);
if (filterNumbers.length ==0){
return 0;}
var squareNumbers=filterNumbers.map(number => number*number);
if(squareNumbers.length == 0){
return 0;}
var sum = squareNumbers.reduce((accumulator, currentValue) => accumulator+ currentValue);
return sum;}
console.log(calculateTotal([1,2,3,4,5,6,7,8,9,10]));
console.log(calculateTotal([10,9,8,7,6,5,4,3,2,1]));
console.log(calculateTotal([0,0,0,0,0,0,0,0,0,0]));
console.log(calculateTotal([1,3,5,7,9]));
console.log(calculateTotal([2,4,6,8,10]));