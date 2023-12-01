function countfunc(count){
        function increasecounter(){
        count++;
        console.log(count);
    }
    return increasecounter;
}
let invoke=countfunc(0);
invoke();
invoke();
invoke();
invoke();
invoke();