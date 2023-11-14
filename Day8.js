function  Subset(arr ,len) {
const subsets=[];
function Subset2(current,start){
    if (current.length===len) {
        subsets.push([...current]);
        return;
    }
    for (let i = start; i < arr.length; i++){
        current.push(arr[i]);
        Subset2(current,i+1);
        current.pop();
    }
}
Subset2([],0);
return subsets;
}
const arr=[1,2,3];
const len=2;
console.log(Subset(arr,len));