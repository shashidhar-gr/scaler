const firstMissingPositive = function(arr) {
    let i = 0;
    while(i < arr.length) {
        if(arr[i] < 1 || arr[i] > arr.length)
            i++;
        else if(arr[i] == i + 1)
            i++;
        else {
            const rightIndex = arr[i] - 1;
            let temp = arr[rightIndex];
            if(temp == arr[i]) {
                i++;
                continue;
            }
            arr[rightIndex] = arr[i];
            arr[i] = temp;
        } 
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != i + 1)
            return i + 1;
    }

    return arr.length + 1;
}

const arr = [1];
const res = firstMissingPositive(arr);
console.log(res);