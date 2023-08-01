const maxchunks = function(A) {
    let count = 0, i = 0, max = 0;
    
    while(i < A.length) {
        max = Math.max(max, A[i]);

        if(i == max)
            count++;
        i++;
    }
    return count;
}

const A = [3, 0, 1, 2, 5, 4, 8, 6, 7];
const res = maxchunks(A);
console.log(res);