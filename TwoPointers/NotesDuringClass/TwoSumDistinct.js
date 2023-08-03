/**
 * Count the pairs which sum up to target(arr[i] + arr[j] == target), give sorted array with distinct numbers.
 * @param {number array} A 
 * @param {number} target 
 */
const twosum = function(A, target) {
    let i = 0, j = A.length-1, count = 0;
    while(i != j) {
        let sum = A[i] + A[j];
        if(sum == target)
            count++;
        else if(sum > target) {
            j--;
        }
        else {
            i++;
        }
    }    
}

const A = [1, 3, 5, 7, 9, 10], target = 8;
const res = twosum(A);
console.log(res);