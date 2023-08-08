const solve = function(A) {
    let mindistance = Number.POSITIVE_INFINITY;
    let hashmap = new Map();
    for(let i = 0; i < A.length; i++) {
        if(hashmap.get(A[i]) == undefined) {
            hashmap.set(A[i], i);
        }
        else {
            let lastindex = hashmap.get(A[i]);
            if(i - lastindex < mindistance) {
                mindistance = i - lastindex;
            }
            hashmap.set(A[i], i);
        }
    }

    return mindistance == Number.POSITIVE_INFINITY ? -1 : mindistance;
}

const A = [1, 2, 3, 6, 1, 2, 3, 2, 1];
const res = solve(A);
console.log(res);