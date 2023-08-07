const squareroot = function(A) {
    let start = 0, end = A, ans = 0;
    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let square = mid * mid;
        if(A == square) {
            return mid;
        }
        else if(square > A) {
            end = mid - 1;
        }
        else {
            ans = mid;
            start = mid + 1;
        }
    }

    return ans;
}

const A = 1;
const res = squareroot(A);
console.log(res);