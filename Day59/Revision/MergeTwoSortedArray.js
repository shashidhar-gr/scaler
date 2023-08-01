/**
 * TC: O(lenght(A)+length(B))
 * SC: O(lenght(A)+length(B))
 * Merge two sorted arrays.
 * @param {sorted number array} A 
 * @param {sorted number array} B 
 * @returns sorted array
 */
const merge = function(A, B) {
    let k = 0, i = 0, j = 0, res = [];
    while(i < A.length && j < B.length) {
        if(A[i] <= B[j]){
            res.push(A[i]);
            i++;
        }
        else {
            res.push(B[j]);
            j++;
        }
        k++;
    }

    while(i < A.length) {
        res.push(A[i]);
        i++;
    }

    while(j < B.length) {
        res.push(B[j]);
        j++;
    }

    return res;
}

const A = [0, 1, 3, 5];
const B = [-10, -5, 0, 1, 6];
const res = merge(A, B);
console.log(res);