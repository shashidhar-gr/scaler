/**
 * Insertion sort.
 * TC: O(N^2)
 * SC: O(1)
 * @param {number array} A 
 * @returns Sorted number array
 */
const sort = function(A) {
    let reader = 1;
    while(reader < A.length) {
        let writer = reader - 1;
        let key = A[reader];
        while(writer >= 0 && A[writer] > key) {
            A[writer+1] = A[writer];
            writer--;
        }
        A[writer+1] = key;
        reader++;
    }
    return A;
}

const A = [12, 11, 13, 5, 6];
const res = sort(A);
console.log(res);