const solve = function(A, B) {
    let count = 0, cursum = 0;
    let L = 0, R = 0;
    while(R < A.length) {
        cursum += A[R];
        if(cursum == B) {
            count++;
        }
    }
}

const A = [1, 0, 1], B = 1;
Ps = [1, 1, 2];
Ss = [2, 1, 1];

const res = solve(A, B);
console.log(res);