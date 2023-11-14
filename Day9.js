function findnotRepeated(str){
    const count={};
    for(let i=0;i<str.length;i++){
    const char=str[i];
    count[char]=(count[char]||0)+1;
    }
    for(let i=0;i<str.length;i++){
    const char=str[i];
    if(count[char]===1){
    return char;
    }
}
return null;
}
console.log(findnotRepeated("aabbbcce"));
