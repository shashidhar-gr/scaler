const sort = function(A) {
    return mergesort(A, 0, A.length - 1);
}

const mergesort = function(A, start, end) {
    if(start == end)
        return A;
    
    let mid = Math.floor((start + end) / 2);
    mergesort(A, start, mid);
    mergesort(A, mid + 1, end);
    return merge(A, start, mid, end);
}

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

const A = [4, 2, 3, 1];
const res = sort(A);
console.log(res);