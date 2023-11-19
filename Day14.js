function repeat(str,times){
    if(times===0) return str;
    return str.repeat(times);
}
const str='hi';
console.log(repeat(str,3));
console.log(repeat(str,8));
console.log(repeat(str,0));