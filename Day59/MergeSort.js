const solve = function(A) {
    sort(A, 0, A.length - 1);
    return A;
}

const sort = function(B, start, end) {
    if(start >= end)
        return;
    
    let mid = Math.floor((start + end) / 2);
    sort(B, start, mid);
    sort(B, mid + 1, end);
    merge(B, start, mid, end);
}

const merge = function(C, start, mid, end) {
    let res = [];
    let i = start, j = mid + 1;
    while(i <= mid && j <= end) {
        if(C[i] <= C[j]) {
            res.push(C[i]);
            i++;
        }
        else {
            res.push(C[j]);
            j++;
        }
    }
    while(i <= mid) {
        res.push(C[i]);
        i++;
    }
    while(j <= end) {
        res.push(C[j]);
        j++;
    }
    i = start, j = 0;
    while(i <= end) {
        C[i] = res[j];
        i++;
        j++;
    }
}

const A = [1, 3, 2];
const res = solve(A);
console.log(res);