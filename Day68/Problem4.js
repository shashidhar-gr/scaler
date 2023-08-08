// Given array, find the lenght of longest chain of consecutive elements.
// (which can be recorded in to consecitive numbers)
const solve = function(A) {
    let count = 0, max = 0;
    let hashset = new Set(A);

    for(let i = 0; i < A.length; i++) {
        if(!hashset.has(A[i]- 1)) {
            let curr = A[i];
            count = 1;
            while(hashset.has(curr + 1)) {
                count++;
                curr += 1;
            }
        }
        max = Math.max(max, count);
    }

    return max;
} 
const A = [100, 4, 200, 1, 3, 2];
const res = solve(A);
console.log(res);