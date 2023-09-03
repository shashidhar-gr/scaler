const solve = function(A) {
    let hmap = new Map();
    let queue = [];
    let res = [];
    let head = 0;
    for(const a of A) {
        let foundAns = false;
        queue.push(a)
        hmap.get(a) == undefined ? hmap.set(a, 1): hmap.set(a, hmap.get(a) + 1)
        while(queue.length) {
            if(hmap.get(queue[head]) == 1) {
                res.push(queue[head])
                foundAns = true;
                break;
            }
            else {
                queue.shift();
            }
        }
        if(!foundAns)
            res.push('#');
    }
    return res.join("");
}

const A = "abcabc";
const res = solve(A);
console.log(res);