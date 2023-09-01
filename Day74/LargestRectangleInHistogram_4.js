const solve = function(A) {
    let max = 0;
    let {leftMins, rightMins} = getBothsideMins(A);
    console.log(leftMins);
    console.log(rightMins);
}

const getBothsideMins = function(A) {
    let leftList = new Array(A.length).fill(0), rightList = new Array(A.length).fill(A.length-1);
    let leftStack = [0];
    for(let i = 1; i < A.length; i++) {
        while(leftList.length && A[leftStack[leftStack.length - 1]] >= A[i]) {
            rightList[leftStack[leftStack.length - 1]] = i - 1;
            leftStack.pop()
        }
        if(leftStack.length)
            leftList[i] = leftStack[leftStack.length - 1];
        else
            leftList[i] = 0;
        leftStack.push(i); 
    }
    return {
        leftList,
        rightList
    }
}

const A = [3, 1, 5, 6, 2, 3];
const res = solve(A);
console.log(res);