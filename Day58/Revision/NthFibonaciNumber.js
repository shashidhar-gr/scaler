const fibo = function(n) {
    if(n == 1 || n == 2) return 0;
    return fibo(n - 2) + fibo(n - 1);
}

const n = 6;
const res = fibo(n);
console.log(res);