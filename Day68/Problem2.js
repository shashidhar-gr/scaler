const solve = function(A) {
    let maxdistance = Number.NEGATIVE_INFINITY;
    let hashmap = new Map();
    for(let i = 0; i < A.length; i++) {
        if(hashmap.get(A[i]) == undefined) {
            hashmap.set(A[i], i);
        }
        else {
            let lastindex = hashmap.get(A[i]);
            if(i - lastindex > maxdistance) {
                maxdistance = i - lastindex;
            }
        }
    }

    return maxdistance;
}

const A = [1, 2, 3, 6, 1, 2, 3, 2, 1];
const res = solve(A);
console.log(res);