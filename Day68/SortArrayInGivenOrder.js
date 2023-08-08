const solve = function(A, B) {
    const hashmap = new Map(), res = [];
    for(let i = 0; i < A.length; i++) {
        if(hashmap.has(A[i])) {
            hashmap.set(A[i], hashmap.get(A[i]) + 1);
        }
        else {
            hashmap.set(A[i], 1);
        }
    }

    for(let i = 0; i < B.length; i++) {
        if(hashmap.has(B[i])) {
            res.push(...(new Array(hashmap.get(B[i])).fill(B[i])))
        }
        hashmap.delete(B[i]);
    }

    let mapIter = hashmap.entries();
    let rem = [];
    let next = mapIter.next();
    while(next['value']) {
        rem.push(...(new Array(next["value"][1]).fill(next["value"][0])));
        next = mapIter.next();
    }

    rem.sort((a, b) => a < b ? -1 : 1);
    res.push(...rem);
    return res;
}

const A = [5, 17, 100, 11];
const B = [1, 100];
const res = solve(A, B);
console.log(res);