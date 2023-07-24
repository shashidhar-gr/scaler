const kthsmallest = function(A, B) {
    let writer = 0, reader = 0, i = 0;
    while(i < B) {
        reader = writer;
        let min = Number.POSITIVE_INFINITY, minIndex = -1;
        while(reader < A.length) {
            if(A[reader] < min) {
                minIndex = reader;
                min = A[reader];
            }
            reader++;
        }
        let temp = A[writer];
        A[writer] = A[minIndex];
        A[minIndex] = temp;
        writer++;
        i++;
    }
    return A[writer-1];
}

let A = [8,16,80,55,32,8,38,40,65,18,15,45,50,38,54,52,23,74,81,42,28,16,66,35,91,36,44,9,85,58,59,49,75,20,87,60,17,11,39,62,20,17,46,26,81,92], B = 9;
const res = kthsmallest(A, B);
console.log(res);