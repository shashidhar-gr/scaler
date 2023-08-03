const sort = function(A) {
    let count = new Array(100001).fill(0);
    for(let i = 0; i < A.length; i++) {
        count[A[i]] += 1;
    }
    let sortedarray = [];
    for(let i = 0; i < count.length; i++) {
        let icount = count[i]; 
        if(icount) {
            while(icount) {
                sortedarray.push(i);
                icount--;
            }
        }
    }

    return sortedarray;
}

const A = [4, 2, 1, 3];
const res = sort(A);
console.log(res);