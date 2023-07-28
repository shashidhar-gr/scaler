const countfactors = function(A) {
    let count = 0;
    for(let i = 1; (i * i) <= A; i++) {
        if(A % i == 0)
            count += 2;
    }
    return count;
}

const countfactors2 = function(A) {
    let count = 1;
    for(let i = 1; i <= Math.floor(A / 2); i++) {
        if(A % i == 0)
            count++;
    }
    return count;
}

const A = 100;
//console.time();
const res = countfactors(A);
console.log(res);
//console.timeEnd();
const res2 = countfactors2(A);
console.log(res2);
//console.timeEnd();
