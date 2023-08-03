/**
 * Subarray with given sum.
 * @param {number array} A 
 * @param {number} target 
 * @returns number array
 */
const twosum = function(A, target) {
    let L = 0, R = 0, sum = A[0];
    while(R < A.length) {
        if(sum == target) {
            return A.slice(L, R + 1);
        }
        if(sum > target) {
            sum -= A[L];
            L++;
        }
        else { 
            R++;
            sum += A[R];
        }
    }

    return [-1];
}

const A = [1, 2, 3, 4, 5], target = 5;
const res = twosum(A, target);
console.log(res);