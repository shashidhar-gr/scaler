var continousSumQuery = function(n, queries) {
    let arr = new Array(n).fill(0);

    for(let i = 0; i < queries.length; i++) {
        arr[queries[i][0]] += queries[i][1];
    }

    for(let i = 1; i < arr.length; i++) {
        arr[i] += arr[i-1];
    }

    return arr;
}

const queries = [[3, 4], [1, 3], [4, -2]], n = 6;
const res = continousSumQuery(n, queries);
console.log(res);