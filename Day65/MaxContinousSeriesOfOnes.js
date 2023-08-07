const solve = function(A, B) {
    let L = 0, R = 0, maxL = -1, maxR = -1, maxwindow = 0, zerocountinwindow = 0;
    while(R < A.length) {
        if(A[R] == 0) {
            zerocountinwindow++;
        }

        while(L < A.length && zerocountinwindow > B) {
            if(A[L] == 0) {
                zerocountinwindow--;
            }
            L++;
        }
        if((R - L + 1) > maxwindow && R < A.length) {
            maxwindow = R - L + 1;
            maxL = L;
            maxR = R;
        }
        R++;
    }

    let res = [];
    for(let i = maxL; i <= maxR; i++) {
        res.push(i);
    }
    return res;
}

const A = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1], B = 1;
const res = solve(A, B);
console.log(res);