/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort(function(a, b) {
        return a[0] <= b[0] ? -1: 1;
    });
    let res = [];
    res.push(intervals[0]);
    
    for(let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];
        let lastend = res[res.length-1][1];
        
        if(start <= lastend) {
            res[res.length-1][1] = Math.max(lastend, end);
        }
        else {
            res.push(intervals[i])
        }
    }

    return res;
}

const quickSort = function(arr, start, end) {
    if(start >= end) {
        return arr;
    }

    let partitionIndex = partition(arr, start, end);
    quickSort(arr, start, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, end);

    return arr;
}

const partition = function(arr, start, end) {
    let reader = start, writer = start, pivotelement = arr[end][0];
    while(reader <= end) {
        if(arr[reader][0] <= pivotelement) {
            let temp = arr[reader][0];
            arr[reader][0] = arr[writer][0];
            arr[writer][0] = temp;
            writer++;
        }
        reader++;
    }
    return writer - 1;
}

const intervals = [[2,6], [8,10], [1,3], [15,18]];
const res = merge(intervals);
console.log(res);