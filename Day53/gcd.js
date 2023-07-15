let gcd = function(A, B) {
    if(A == undefined || B == undefined)
        return A == undefined ? B: A;

    if(A % B == 0)
        return B;

    if(A < B) {
        let temp = A;
        A = B;
        B = temp;
    }

    while(A > 0) {
        if(B == 0)
            return A;

        A = A % B;
        if(A < B) {
            let temp = A;
            A = B;
            B = temp;
        }
    }
    return B;
}

module.exports = gcd;

// const A = 7, B = 6;
// const res = gcd(A, B);
// console.log(res);