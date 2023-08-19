const solve = function(A, B) {
    let total = A.length + B.length;
    let half = Math.floor((total + 1) / 2);
    if(A.length > B.length) {
        let C = Object.assign([], A);
        A = Object.assign([], B);
        B = Object.assign([], C);
    }
    let l = 0, r = A.length;
    while(l <= r) {
        let mida = Math.floor((l + r) / 2);
        let midb = half - mida;

        let Aleft = mida >= 0 ? A[mida] : Number.NEGATIVE_INFINITY;
        let Aright = mida + 1 <= A.length ? A[mida + 1] : Number.POSITIVE_INFINITY;
        let Bleft = midb >= 0 ? B[midb] : Number.NEGATIVE_INFINITY;
        let Bright = midb + 1 <= B.length ? B[midb + 1] : Number.POSITIVE_INFINITY;

        if(Aleft <= Bright && Bleft <= Aright) {
            if(total % 2 == 0) {
                let median = Math.floor((Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2);
                return median;
            }
            else {
                let median =  Math.min(Aleft, Bleft);
                return median;
            }
        }
        else if(Aleft > Bright) {
            r = mida - 1;
        }
        else {
            l = mida + 1;
        }
    }
}

const A = [1, 4, 5], B = [2, 3];
//[1, 2, 3, 4, 5] = [3]
//[1, 2, 3, 3, 5, 6, 10, 15, 28] = [5]
const res = solve(A, B);
console.log(res);