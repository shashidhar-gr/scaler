const search = function(A, n) {
    return binaryserach(A, n, 0, A.length - 1);
}

const binaryserach = function(source, target, L, R) {
    if(L > R)
        return -1;
    
    let mid = Math.floor((L + R) / 2);
    if(source[mid] == target)
        return mid;
    if(target < source[mid])
        return binaryserach(source, target, L, mid - 1);
    else
        return binaryserach(source, target, mid + 1, R);
}

const A = [1, 2, 3, 4, 5, 6, 7, 8];
const n = 9;
const res = search(A, n);
console.log(res);