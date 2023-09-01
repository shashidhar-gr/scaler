const LargetstHisotgram = require('./LargestRectangleInHistogram_5');
const solve = function(A) {
    let arr = [];
    let max = 0;
    for(let row = 0; row < A.length; row++) {
        for(let col = 0; col < A[0].length; col++) {
            if(row == 0)
                arr.push(A[row][col])
            else {
                A[row][col] = A[row][col] != 0 ? A[row][col] + A[row - 1][col]: 0;    
                arr[col] = A[row][col] == 0 ? 0 : A[row][col];
            }
        }
        max = Math.max(max,  LargetstHisotgram(arr));
    }
    return max;
}

const A = [
    [0, 0, 1],
    [0, 1, 1],
    [1, 1, 1]];
const res = solve(A);
console.log(res);