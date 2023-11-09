area=(s1,s2,s3)=>{
    var p=(s1+s2+s3)/2;
    return Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));
}
console.log(Math.round(area(5,6,7)));