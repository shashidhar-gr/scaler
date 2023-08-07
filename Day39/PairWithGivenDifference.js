const solve = function(A, B) {
    let i = 0, hashmap = new Map();
    while(i < A.length) {
        hashmap.set(A[i], hashmap.get(A[i]) == undefined ? 1: hashmap.get(A[i]) + 1);
        i++;
    }

    i = 0;
    while(i < A.length) {
        let b = B + A[i];
        if(A[i] != b && hashmap.has(b)) {
            return 1;
        }
        else if(A[i] == b && hashmap.get(b) > 1) {
            return 1;
        }
        i++;
    }

    return 0;
}

const A = [-100, 20, 80], B = 9;
res = solve(A, B);
console.log(res);