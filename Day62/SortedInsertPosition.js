const solve = function(A, B) {
    let index = binaryserach(A, B, -1, 0, A.length-1);
    if(index == -1)
        return A.length;
    return index;
}

const binaryserach = function(source, target, leastgreaterIndex, L, R) {
    if(L > R)
        return leastgreaterIndex;
    
    let mid = Math.floor((L + R) / 2);
    if(source[mid] == target)
        return mid;
    if(target < source[mid]) {
        leastgreaterIndex = mid;
        return binaryserach(source, target, leastgreaterIndex, L, mid - 1);
    }
    else {
        return binaryserach(source, target, leastgreaterIndex, mid + 1, R);
    }
}

const A = [1, 3, 5, 6];
const n = 0;
const res = solve(A, n);
console.log(res);