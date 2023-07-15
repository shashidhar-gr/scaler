const slidingwindow = function(nums) {
    let maxL = 0, maxR = 0, L = 0, cursum = 0, max = Number.NEGATIVE_INFINITY;
    for(let R = 0; R < nums.length; R++) {
        if(cursum < 0) {
            L = R;
        }
        cursum = Math.max(cursum + nums[R], nums[R]);
        if(cursum > max) {
            max = cursum;
            maxL = L;
            maxR = R;
        } 
    }
    return [maxL, maxR];
}

const arr = [-1, 1, -1, -1, 1, 1, 1, -1, 1, -1];
const res = slidingwindow(arr);
console.log(res);