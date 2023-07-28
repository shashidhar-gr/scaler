const pairSum = function(A, B) {
    let mod = 1000000007, count = 0, cnt = new Array(B).fill(0);
    for(let i = 0; i < A.length; i++) {
        let mod = Math.floor(A[i] % B);
        cnt[mod] += 1;
    }

    count += Math.floor(cnt[0] * (cnt[0] - 1)) / 2;
    count %= mod;
    let i = 1, j = B - 1;
    while(i <= j) {
        if(i == j)
            count += Math.floor(cnt[i] * (cnt[j] - 1)) / 2;
        else {
            j = B - i;
            count += cnt[i] * cnt[j];
        }
        count %= mod;
        i++;
        j--;
    }
    return count;
}

const A = [1, 2, 3, 4, 5], B = 2;
const res = pairSum(A, B);
console.log(res);