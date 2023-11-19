var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
let arr=[ ];
for (const key in student) {
    arr.push(key);
}
console.log(arr);