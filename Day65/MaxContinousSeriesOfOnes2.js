const solve = function(A, B) {
    let zerocountinwindow = 0, L = 0, R = 0, windowsize = 0, maxR = 0, maxL = 0;
    while(R < A.length) {
        if(A[R] == 1) {
            R++;
        }
        else {
            if(zerocountinwindow < B) {
                zerocountinwindow++;
                R++;
            }
            else {
                while(A[L] != 0) {
                    L++;
                }
                L++;
                R++;
            }
        }
        if(R - L + 1 > windowsize) {
            maxR = Math.max(maxR, R);
            maxL = Math.max(maxL, L);
            windowsize = R - L + 1;
        }
    }
    let res = [];
    for(let i = maxL; i <= maxR; i++) {
        res.push(i);
    }
    return res;
}

const A = [0, 1, 1], B = 0;
const res = solve(A, B);
console.log(res)