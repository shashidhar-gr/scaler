let plusOne = function(A){
    let carry = 0;
    let sum = 0;
    A[A.length - 1] += 1;
    for(let i = A.length - 1; i >= 0; i--) {
        sum = carry + A[i]
        if(sum > 9) {
            carry = sum % 9;
            A[i] = sum % 10;
        }
        else {
            A[i] = sum;
            carry = 0;
            break;
        }
    }
    if(carry) {
        carry = carry % 9;
        A.unshift(carry);
    }
    
    let i = 0;
    while(A[i] == 0) {
        A.shift();
    }

    return A;
}

const A = [0, 3, 7, 6, 4, 0, 5, 5, 6];
const res = plusOne(A);