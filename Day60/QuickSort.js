const sort = function(A) {
    quicksort(A, 0, A.length - 1);
    return A;
}

const quicksort = function(A, left, right) {
    if(left >= right)
        return;
    
    let pivot = partition(A, left, right);
    quicksort(A, left, pivot - 1);
    quicksort(A, pivot + 1, right);
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

const A = [5, 3, 7, 4, 4, 11, 14, 19];
const res = sort(A);
console.log(res);