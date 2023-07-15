const maxSumOne = function(A) {
    let isAllones = true;
    let nums = A.split("");
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 1)
            nums[i] = -1;
        else {
            nums[i] = 1;
            isAllones = false;
        }
    }

    if(isAllones)
        return [];

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
    return [maxL + 1, maxR + 1];
}

const A = "010";
const res = maxSumOne(A);
console.log(res);
