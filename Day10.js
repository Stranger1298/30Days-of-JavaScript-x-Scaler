let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log("Before sorting: "+ arr);
for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-1-i; j++) {
        if (arr[j]<arr[j+1]) {
            let temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        } 
    }
}
console.log("After sorting: "+arr);