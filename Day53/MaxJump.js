var maximumJumps = function(nums, target) {
    let count = 0;
    
    let i = 0, j = 1, stack = [];
    stack.push(0);
    
    while(j < nums.length) {
        if(nums[j] - nums[i] <= target && nums[j] - nums[i] >= -1 * target) {
            count++;
            i = j;
            stack.push(i);
        }
        j++;
    }
    
    if(i === nums.length - 1)
        return count;
    
    count = 0;
    while(stack.length != 0) {
        let val = nums[nums.length - 1] - nums[stack.at(-1)];
        if(nums[nums.length - 1] - nums[stack.at(-1)] <= target && nums[nums.length - 1] - nums[stack.at(-1)] >= target) {
            count++;
            stack.pop();
        }
        else
            stack.pop();
    }
    
    return count == 0 ? -1: count;
};

const nums = [1, 2, 0];
const target = 1;
const res = maximumJumps(nums, target);
console.log(res);

/**
 * let count = 0;
    
    let i = 0, j = 1;
    
    while(j < nums.length) {
        if(nums[j] - nums[i] <= target && nums[j] - nums[i] >= -1 * target) {
            count++;
            i = j;
        }
        j++;
    }
    
    return i === nums.length - 1 ? count : -1;
 */