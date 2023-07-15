const algo = function(arr) {
    let maxsum = arr[0], cursum = 0;

    for(let i = 0; i < arr.length; i++) {
        cursum = Math.max(cursum, 0);
        cursum += arr[i];
        maxsum = Math.max(maxsum, cursum);
    }

    return cursum;
}

const arr = [5, 6, 7, -3, 2, -10, -12, 8, 12, 21, -4, 7];
const res = algo(arr);
console.log(res);