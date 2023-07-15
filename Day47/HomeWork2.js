const maxSumOne = function(A) {
    let arr = [];
    for(const c of A) {
        if(c == "1")
            arr.push(-1);
        else    
            arr.push(1);
    }

    let R = 0, cursum = 0;
    for(let L = 0; L < arr.length; L++) {
        if(cursum <= 0) {
            L = R;
            cursum = 0;
        }
        cursum += arr[R];
        if(cursum > maxsum) {
            maxsum = cursum;
            maxL = L;
            maxR = R;
        }
    }
}

const A = "010";
const res = maxSumOne(A);
console.log(res);
