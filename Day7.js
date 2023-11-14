function paircheck(a,b){
    if(a==50 || b==50 || a+b==50)
        return true;
    else
        return false;
}
console.log(paircheck(25,25));
console.log(paircheck(50,50));
console.log(paircheck(50,0));
console.log(paircheck(34,76));