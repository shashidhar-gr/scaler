const solve = function(A) {
    return binarysearch(A, 0, A.length - 1);
}

const binarysearch = function(source, L, R) {
    if(L > R)
        return -1;
    
    let mid = Math.floor((L + R) / 2);
    
    if(mid - 1 >= 0 && mid + 1 <= source.length - 1 && source[mid - 1] != source[mid] 
        && source[mid + 1] != source[mid]) {
            return source[mid];
    }
    else if(mid - 1 < 0 && mid + 1 >= 0
        && source[mid + 1] != source[mid]) {
            return source[mid];
    }
    else if(mid - 1 >= 0 && mid + 1 > source.length - 1
        && source[mid - 1] != source[mid]) {
            return source[mid];
    }
    else if(mid - 1 >= 0 && (source[mid - 1] == source[mid] && (mid - 1) % 2 != 0) || 
    (mid + 1 <= source.length - 1 && (source[mid + 1] == source[mid]) && (mid % 2 != 0))) {
        return binarysearch(source, L, mid - 1);
    }
    else {
        return binarysearch(source, mid + 1, R);
    }
}

const A = [7, 7, 2];
const res = solve(A);
console.log(res);