const solve = function(A, B) {
    let n = A.length;
    let m = A[0].length;
    let full = n * m;

    let l = 0;
    let r = full - 1;

    while(l <= r){
        mid = Math.floor(l + (r-l)/2);
        let row = Math.floor(mid / m);
        let col = (mid % m);
        if(B == A[row][col]){
            return 1;
        } 
        else if(A[row][col] < B){
            l = mid + 1;
        } 
        else {
            r = mid - 1;
        }
    }
    return 0;
}

const A = [[1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50] ];
const B = 3;
const res = solve(A, B);
console.log(res);