const largestnumber = function(A) {
    A = A.sort((a, b) => {
        let num1 = Number(a+''+b);
        let num2 = Number(b+''+a);
        return num1 < num2 ? -1 : 1;
    });
    let res = A.reduce((acc, val, index, array) => acc + val);
    if(res)
        return A.reverse().join("");
    return 0;
}

const A = [3, 30, 34, 5, 9];
const res = largestnumber(A);
console.log(res);