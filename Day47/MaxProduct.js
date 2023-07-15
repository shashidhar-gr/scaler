/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let curproduct = 1, max = Number.NEGATIVE_INFINITY;
    for(const n of nums) {
        curproduct = Math.max(n, curproduct * n);
        max = Math.max(max, curproduct);
    }

    return max;
};

const nums = [-2,3,-4];
const res = maxProduct(nums);
console.log(res);