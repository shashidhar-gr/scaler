const quickselect = function(A, k) {
    let res = solve(A, k, 0, A.length - 1);
    return res;
}

const solve = function(A, k, left, right) {
    let pivot = partition(A, left, right);
    if(pivot == k)
        return A[k];
    if(k < pivot) {
        return solve(A, k, left, pivot - 1);
    }
    else {
        return solve(A, k, pivot + 1, right);
    }
}

const partition = function(A, left, right) {
    let writer = left;
    let pivot = A[right];

    while(writer <= right && A[writer] <= pivot){
        writer++;
    }

    let reader = writer + 1;
    while(reader <= right) {
        while(A[reader] <= pivot) {
            let temp = A[writer];
            A[writer] = A[reader];
            A[reader] = temp;
            writer++;
        }
        reader++;
    }
    return writer - 1;
}

const A = [3, 1, 7, 8, 4], k = 3;
const res = quickselect(A, k);
console.log(res);