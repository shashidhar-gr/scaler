const solve = function(A) {
    return sort(A, 0, A.length - 1);
}

const sort = function(B, start, end) {
    let invCount = 0, mod = 1000000007;
    if(start >= end)
        return invCount;
    
    let mid = Math.floor((start + end) / 2);
    invCount += sort(B, start, mid);
    invCount += sort(B, mid + 1, end);
    invCount += merge(B, start, mid, end);
    return invCount %= mod;
}

const merge = function(C, start, mid, end) {
    let res = [], invCount = 0, mod = 1000000007;
    let i = start, j = mid + 1;
    while(i <= mid && j <= end) {
        if(C[i] <= C[j]) {
            res.push(C[i]);
            i++;
        }
        else {
            res.push(C[j]);
            invCount += (mid - i + 1);
            invCount %= mod;
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

    return invCount;
}

const A = [3, 4, 1, 2];
const res = solve(A);
console.log(res);

