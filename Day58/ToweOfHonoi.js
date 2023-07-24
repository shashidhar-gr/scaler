const towerOfHanoi = function(n){
    let res = [];
    const solve = function(n, source, destination, temp) {
        if(n == 0)
            return;
            let list = [];
            solve(n-1, source, temp, destination);
            list.push(n, source, destination);
            res.push(list);
            console.log("Move disk "+n+" from source "+source+" to destination "+destination);
            solve(n-1, temp, destination, source);
    }

    solve(n, '1', '3', '2');
    return res;
}

const res = towerOfHanoi(1);
console.log(res);

//8147 500 500