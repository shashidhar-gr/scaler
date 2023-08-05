const solve = function(A, B) {
    A.sort(function(a,b){return a - b;})
    let n = A.length;
    let p1 = 0;
    let p2 = 1;
    let count = 0;
    while(p2 < n ) {
        let v1 = A[p1];
        let v2 = A[p2];
        if(A[p2] - A[p1] == B) {
            count++;
            while(p1 < n && A[p1] == v1 ) {
                p1++;
            }
            while(p2 < n && A[p2] == v2 ) {
                p2++;
            }
        } else if(A[p2] - A[p1] > B) {
            p1++;
            if(p1 === p2) {
                p2++;
            }
        } else {
            p2++;
        }
    }
    return count;
} 

const A = [8,5,1,10,5,9,9,3,5,6,6,2,8,2,2,6,3,8,7,2,5,3,4,3,3,2,7,9,6,8,7,2,9,10,3,8,10,6,5,4,2,3], target = 3;
//const A = [1, 1, 1, 2, 2], target = 0;
const res = solve(A, target);
console.log(res);
/**
let L = 0, R = 1, count = 0;
        A = A.sort((a, b) => a < b ? -1 : 1);
        while(R < A.length) {
            let diff = Math.abs(A[L] - A[R]);
            if(diff < target)
                R++;
            else if(diff > target)
                L++;
            else {
                count++;
                R++;
                L++;
            }
            if(L == R)
                R++;
        }
        return count;
 */