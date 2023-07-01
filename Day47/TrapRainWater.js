
let trap = function(A){
    let count = 0;
    let maxleft = maxLeft(A);
    let maxright = maxRight(A);
    for(let i = 0; i < A.length; i++) {
        count = count + (Math.min(maxleft[i], maxright[i]) - A[i]);
    }

    return count;
}


let maxLeft = function(A) {
    console.log("max function");
    let res = [];
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < A.length; i++) {
        if(A[i] > max) {
            max = A[i];
            res[i] = max;
        }
        else {
            res[i] = max;
        }
    }

    return res;
}

let maxRight = function(A) {
    let res = [];
    let max = Number.NEGATIVE_INFINITY;
    for(let i = A.length - 1; i >= 0; i--) {
        if(A[i] > max) {
            max = A[i];
            res[i] = max;
        }
        else {
            res[i] = max;
        }
    }

    return res;
}

trap([0]);