const solve = function(A) {
    A.sort((a, b) => a < b ? -1: 1);

    let j = A.length-1;
    let max=0, min=0;
    let mod = 1000000007;
    for(let i=0;i<A.length/2;i++){     
        max += Math.abs(A[j] - A[i]);
        max %= mod;
        j--;
    }

    for(j=A.length-1;j>=0;j-=2){
        min += Math.abs(A[j] - A[j-1]);    
        min %= mod;
    }

    let B = [max, min];
    return B;
}

const A = [2, 2];
const res = solve(A);
console.log(res);
