const kadens = function(nums) {
    let max = Number.NEGATIVE_INFINITY;
    let curmax = 0;
    for(const n of nums) {
        curmax = Math.max(n, curmax + n);
        max = Math.max(max, curmax);
    }
    return max;
}

const arr = [4, -1, 2, -7, 3, 4];
const res = kadens(arr);
console.log(res);