const merge = function(A, start, mid, end) {
    let res = [];
    let i = start, j = mid + 1, k = start;
    while(i <= mid && j <= end) {
        if(A[i] <= A[j]) {
            res.push(A[i]);
            i++
        }
        else {
            res.push(A[j]);
            j++;
        }
        k++;
    }

    while(i <= mid) {
        res.push(A[i]);
        i++;
    }

    while(j <= end) {
        res.push(A[j]);
        j++;
    }

    i = start, k = 0;
    while(i <= end) {
        A[i] = res[k];
        i++;
        k++;
    }

    return A;
}

const A = [4, 8, -1, 2, 6, 9, 11, 3, 4, 7, 13, 0];
const res = merge(A, 2, 6, 9);
console.log(res);