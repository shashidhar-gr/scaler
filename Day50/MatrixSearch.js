const solve = function(A, B) {
    let i = 0, j = A[0].length - 1, res = -1;

    while(i < A.length && j >= 0) {
        if(A[i][j] == B) {
            res = ((i + 1) * 1009) + (j + 1);
            j--;
        }
        else if(A[i][j] > B)
            j--;
        else {
            if(res != -1)
                return res;
            i++;
        }
    }

    return res;
}

const A = [[1, 2], [3, 3]];
const B = 3;
const res = solve(A, B);
console.log(res);