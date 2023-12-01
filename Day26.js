function calculateTotal(num){
    const oddNumber = num.filter(number=> number%2!==0);
    const squareNumbers=oddNumber.map(number=>number*number);
    const total=squareNumbers.reduce((accumulator,currentNumber)=>accumulator+currentNumber,0);
    return total;
}
console.log(calculateTotal([1,2,3,4,5,6,7,8,9]));