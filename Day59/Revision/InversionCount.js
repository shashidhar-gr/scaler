const sort = function(A) {
    return mergesort(A, 0, A.length - 1);
}

const mergesort = function(A, start, end) {
    let count = 0;
    if(start == end)
        return count;
    
    let mid = Math.floor((start + end) / 2);
    count += mergesort(A, start, mid);
    count += mergesort(A, mid + 1, end);
    count += merge(A, start, mid, end);
    return count;
}

const merge = function(A, start, mid, end) {
    let res = [], count = 0;
    let i = start, j = mid + 1, k = start;
    while(i <= mid && j <= end) {
        if(A[i] <= A[j]) {
            res.push(A[i]);
            i++
        }
        else {
            res.push(A[j]);
            count += mid - i + 1;
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

    return count;
}

const A = [4, 5, 1, 2, 6, 3];
const res = sort(A);
console.log(res);