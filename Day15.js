function string_chop(str,size) {
    const chopped_str=[];
    for (let i = 0; i < str.length; i+=size) {
        if (str===size || str===size-1)
            chopped_str.push(str);
        else
            chopped_str.push(str.slice(i,i+size));
    }
    return chopped_str;
}
console.log(string_chop('string',2));
console.log(string_chop('scaler',3));
console.log(string_chop('javascript',1));