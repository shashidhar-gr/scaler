const sum = function(n) {
    if(n == 1) return 1;
    return n + sum(n - 1);
}

const n = 10;
const res = sum(n);
console.log(res);