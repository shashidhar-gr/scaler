/**
 * Selection sort.
 * TC: O(N^2)
 * SC: O(1)
 * @param {number array} A 
 * @returns sorted number array
 */
const sort = function(A) {
    for(let i = 0; i < A.length; i++) {
        let minindex = i, min = A[i];
        for(let j = i; j < A.length; j++) {
            if(A[j] < min) {
                min = A[j];
                minindex = j;
            }
        }
        let temp = A[i];
        A[i] = min;
        A[minindex] = temp;
    }
    return A;
}

const A = [3, 1, 5, 0, -1, 4, -10];
const res = sort(A);
console.log(res);