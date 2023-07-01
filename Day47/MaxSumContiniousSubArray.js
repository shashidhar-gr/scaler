let maxSubArray = function(A){
    let maxSum = Number.NEGATIVE_INFINITY, curSum = 0;
    for(let i = 0; i < A.length; i++) {
        curSum += A[i];
        if(curSum > maxSum) {
            maxSum = curSum;
        }
        if(curSum <= 0) {
            curSum = 0;
        }
    }
    return maxSum;
}