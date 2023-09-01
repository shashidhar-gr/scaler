const LargetstHisotgram = function(A) {
    let stack = [{index: 0, height: A[0]}];
    let max = A[0];
    for(let i = 1; i < A.length; i++) {
        let rightIndex = i;
        while(stack.length && stack[stack.length-1]["height"] > A[i]) {
            let width = i - stack[stack.length-1]["index"];
            let area = width * stack[stack.length-1]["height"];
            max = Math.max(max, area);
            rightIndex = stack[stack.length-1]["index"];
            stack.pop();
        }
        stack.push({index: rightIndex, height: A[i]})
    }
    while(stack.length) {
        let width = (A.length - 1) - stack[stack.length - 1]["index"] + 1;
        let area = width * stack[stack.length - 1]["height"];
        max = Math.max(max, area);
        stack.pop();
    }
    return max;
}

module.exports = LargetstHisotgram;