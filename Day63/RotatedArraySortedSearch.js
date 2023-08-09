const solve = function(A, target) {
    let left = 0, right = A.length - 1, mid = -1;
    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if(A[mid] == target)
            return mid;
        else if(A[mid] >= A[left]) { // Mid is in left portion of sorted array
            if(target > A[mid] || target < A[left]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        else {                      // Mid is in right portion of sorted array
            if(target < A[mid] || target > A[right]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
    }

    return -1;
}

const A = [9, 10, 3, 5, 6, 8], target = 5;
const res = solve(A, target);
console.log(res);