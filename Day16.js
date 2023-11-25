function sum(num) {
    const sum = num.reduce((accumulator, currentValue) => {return accumulator + currentValue;}, 0);
    console.log(sum);
}
let num=[1,2,3,4,5];
sum(num);