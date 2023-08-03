const twosum = function(A, k) {
    let i = 0, j = A.length - 1, count = 0;
    while(i < j) {
        if(arr[i] + arr[j] < k)
            i++;
        else if(arr[i] + arr[j] > k)
            j--;
        else {
            if(arr[i] == arr[j]) {
                let ans = j - i + 1;
                count += Math.floor(ans * (ans -1) / 2);
                break;
            }
            let ans1 = 0;
            let num = arr[i];
            while(arr[i] == num) {
                ans1++;
                i++;
            }
            let ans2 = 0;
            num = arr[j];
            while(arr[j] == num) {
                ans2++;
                j--;
            }
            count += ans1 * ans2;
        }
    }

    return count;
}

const A = [1, 2, 4, 7, 7, 9, 10, 10, 10, 13, 13, 13, 15, 18, 25];
