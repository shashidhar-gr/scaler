const powerofn = function(a, b) {
    if(b == 0)
        return 1;
    
    let p = powerofn(a, Math.floor(b/2));

    if(b % 2 == 0)
        return (p * p) % m;
    else   
        return (a * p * p) % m;
}
let m = 1000000009;
const res = powerofn(10, 1000);
console.log(res);