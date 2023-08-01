const partition = function(A) {
    let writer = 0;
    let pivot = A[A.length-1];

    while(A[writer] <= pivot){
        writer++;
    }

    let reader = writer + 1;
    while(reader < A.length) {
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

const A = [7, 3, 2, 5, 1, 6, 4];
// [7, 3, 2, 5, 1, 6, 4] -> [3, 7, 2, 5, 1, 6, 4]
// [3, 2, 7, 5, 1, 6, 4] -> [3, 2, 1, 5, 7, 6, 4]
// [3, 2, 1, 4, 7, 6, 5]
const res = partition(A);
console.log(res);