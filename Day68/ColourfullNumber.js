const solve = function(A) {
    A = A.toString();
    let set = new Set();
    let count = 0;
    for(let i = 0; i < A.length; i++){
        let prod = 1;
        for(let j = i; j < A.length; j++){
            prod *= A[j];
            count += 1;
            set.add(prod)
        }
    }
    if(count > set.size) 
        return 0;
    return 1; 
}

const A = 263;
const res = solve(A);
console.log(res);