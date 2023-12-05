function* range(start,end){
    for (let i = start; i <= end; i++){
        yield i;       
    }
}
console.log();
for(let num of range(1,20)){
    console.log(num);
}
console.log();