const solve = function(A, B) {
    
    if(B > A.length)
        return [];

    let hashmap = new Map();

    let i = 0, res = [];
    while(i < B) {
        hashmap.set(A[i], hashmap.get(A[i]) == undefined ? 1: hashmap.get(A[i]) + 1);
        i++;
    }

    res[0] = hashmap.size;
    i = 0;
    let L = i;
    let R = i + B;
    while(R < A.length) {
        let remove = A[L];
        let add = A[R];

        if(hashmap.get(remove) - 1 == 0) {
            hashmap.delete(remove);
        }
        else {
            hashmap.set(remove, hashmap.get(remove) - 1);
        }

        if(hashmap.get(add) == undefined) {
            hashmap.set(add, 1);
        }
        else {
            hashmap.set(add, hashmap.get(add) + 1);
        }
        res[L+1] = hashmap.size;
        L++;
        R++;
    }

    return res;
}

const A =[1, 1, 2, 2], B = 5;
const res = solve(A, B);
console.log(res);