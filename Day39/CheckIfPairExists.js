const solve = function(A, B) {
    let i = 0, hashmap = new Map();
    while(i < A.length) {
        hashmap.set(A[i], hashmap.get(A[i]) == undefined ? 1: hashmap.get(A[i]) + 1);
        i++;
    }

    i = 0;
    while(i < A.length) {
        let b = B - A[i];
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

const B = [23,52,95,29,9,47,49,55,96,4], A = 100;
const res = solve(B, A);
console.log(res);