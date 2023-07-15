const solve = function(A){
    let stack = [], minrow = -1;
    for(let row = 0; row < A.length; row++) {
        let sum = 0;
        for(let col = A[row].length - 1; col >= 0; col--) {
            if(A[row][col] == 1)
                sum += 1;
        }
        if(stack.length) {
            let lastmax = stack[stack.length-1];
            if(sum > lastmax) {
                stack.push(sum);
                minrow = row;
            }
        }
        else {
            stack.push(sum);
            minrow = row;
        }
    }

    return minrow;
}

const A = [[0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,1,1,1],
[0,0,0,0,0,0,1,1,1],
[0,0,0,1,1,1,1,1,1],
[0,0,0,0,1,1,1,1,1],
[0,0,0,1,1,1,1,1,1],
[0,0,0,1,1,1,1,1,1]];
const res = solve(A);
console.log(res);