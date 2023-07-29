const solve = function(A, B) {
    let rightMostIndex = searchRightMostIndex(A, B, -1, 0, A.length - 1);
    let leftMostIndex = searchLeftMostIndex(A, B, -1, 0, A.length - 1);
    if(leftMostIndex != -1 && rightMostIndex != -1)
        return [leftMostIndex, rightMostIndex];
    
    return [-1, -1];
}

const searchLeftMostIndex = function(source, target, rightmostindex, L, R) {
    if(L > R)
        return -1;
    
    let mid = Math.floor((L + R) / 2);
    if(source[mid] == target) {
        rightmostindex = mid;
        if(mid - 1 >= L && source[mid - 1] == target) {
            return searchLeftMostIndex(source, target, rightmostindex, L, mid - 1);
        }
        else {
            return rightmostindex;
        }
    }
    else if(target < source[mid]){
        return searchLeftMostIndex(source, target, rightmostindex, L, mid - 1);
    }
    else {
        return searchLeftMostIndex(source, target, rightmostindex, mid + 1, R);
    }
}

const searchRightMostIndex = function(source, target, leftmostindex, L, R) {
    if(L > R)
        return -1;
    
    let mid = Math.floor((L + R) / 2);
    if(source[mid] == target) {
        leftmostindex = mid;
        if(mid + 1 <= R && source[mid + 1] == target) {
            return searchRightMostIndex(source, target, leftmostindex, mid + 1, R);
        }
        else {
            return leftmostindex;
        }
    }
    else if(target < source[mid]){
        return searchRightMostIndex(source, target, leftmostindex, L, mid - 1);
    }
    else {
        return searchRightMostIndex(source, target, leftmostindex, mid + 1, R);
    }
}

const A = [5, 7, 7, 8, 8, 10], B = 15;
const res = solve(A, B);
console.log(res);