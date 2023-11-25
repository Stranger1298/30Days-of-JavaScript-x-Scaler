function allPositive(nums) {
    return nums.every(nums=>nums>0);
}
console.log(allPositive([1,-2,3,-6,4,-9]));
console.log(allPositive([7,5,3,6,8,5,3,67]));