// Given array, find the largest subarray with sum = 0 return length of subarray
const solve = function(A) {
    let prefarr = prefsum(A);
    let maxdistance = Number.NEGATIVE_INFINITY;
    let hashmap = new Map();
    for(let i = 0; i < prefarr.length; i++) {
        if(hashmap.get(prefarr[i]) == undefined) {
            hashmap.set(prefarr[i], i);
        }
        else {
            let lastindex = hashmap.get(prefarr[i]);
            if(i - lastindex > maxdistance) {
                maxdistance = i - lastindex;
            }
        }
    }

    return maxdistance == Number.NEGATIVE_INFINITY ? 0 : maxdistance;
}

const prefsum = function(A) {
    const res = [];
    res[0] = A[0];
    for(let i = 1; i < A.length; i++) {
        res[i] = res[i-1] + A[i];
    }
    res.unshift(0);
    return res;
}

const B = [-16, 16, 3];
const res = solve(B);
console.log(res);