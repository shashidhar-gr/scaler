const solve = function(A) {
    let s = -1, e = -1, arr = [];   
    for(let i = 0; i < A.length; i++) {
        arr.push(A[i]);
    }
    
    arr = arr.sort((a, b) => a < b ? -1 : 1);
    
    for(let i = 0; i < A.length; i++) {
        if(arr[i] != A[i]) {
            if(s == -1) {
                s = i;
            }
            if(e < i && s != i) {
                e = i;
            }
        }
    }
    
    if(s == -1) {
        return [-1];
    }
    
    return [s, e];
}

const A = [1, 2, 3, 4, 5];
const res = solve(A);
console.log(res);