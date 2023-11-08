let CheckinRange = function(a){
    if (a>=50 && a<=99) {
        return true;
    }
    else{
        return false;
    }
}
console.log(CheckinRange(50)); //Boundary conditon
console.log(CheckinRange(99));//Boundary condition
console.log(CheckinRange(67));
console.log(CheckinRange(100));
console.log(CheckinRange(20));