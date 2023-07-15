var continousSumQuery = function(A, B) {
    let res = new Array(A).fill(0);

    for(let i = 0 ; i < B.length; i++) {
        res[B[i][0] - 1] = res[B[i][0] - 1] + B[i][2];
        if(B[i][1] < res.length) 
            res[B[i][1]] = res[B[i][1]] - B[i][2];
    }

    for(let i = 1; i < res.length; i++) {
        res[i] = res[i - 1] + res[i];
    }
    return res;
}

const queries = [[1, 2, 10], [2, 3, 20], [2, 5, 25]], n = 5;
const res = continousSumQuery(n, queries);
console.log(res);