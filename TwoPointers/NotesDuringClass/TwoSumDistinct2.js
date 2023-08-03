// Given distinct elements, sorted array, find two pointers where arr[j]-arr[i] == target
const solve = function() {
    let i = 0; j = 1, count = 0;
    while(j < A.length) {
        if(arr[j] - arr[i] < k)
            j++;
        if(arr[j] - arr[i] > k)
            i++;
        else {
            count++;
            j++;
            i++;
        }
        if(i == j) j++;
    }

    return count;
}