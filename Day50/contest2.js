/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    let allsame = true;
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] != nums[i + 1])
            allsame = false;
    }

    if(allsame)
        return nums.length;
    
    
};