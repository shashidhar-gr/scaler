/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let sum = 0;
    for(let i = 1; i <= Math.floor(nums.length/2); i++) {
        if(nums.length % i == 0) {
            sum += nums[i-1] * nums[i-1];
        }
    }
    sum += nums[nums.length-1] * nums[nums.length-1];
    return sum;
};

const arr = [2,7,1,19,18,3];
const res = sumOfSquares(arr);
console.log(res);