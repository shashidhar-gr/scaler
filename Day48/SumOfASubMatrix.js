const sovle = function(A, queries) {
    let res = [];
    for(let i = 0; i < queries.length; i++) {
        let TL = queries[i][0];
        let BR = queries[i][1];
        let sum = 0;
        for(let row = TL[0]; row <= BR[0]; row++) {
            for(let col = TL[1]; col <= BR[1]; col++) {
                sum += A[row][col];
            }
        }
        res.push(sum);
    }
    return res;
}

const A = [[1, 1], [2, 1]];
const queries = [[[0, 0], [1, 1]], [[0, 0], [0, 0]], [[0, 1], [1, 1]]];
const res = sovle(A, queries);
console.log(res);