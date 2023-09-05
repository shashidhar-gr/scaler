const solve = function(A, target) {
    return solveRecursively(A, target);
}

const solveRecursively = function(A, target) {
    const bst = function(A) {
        if(A == null)
            return false;
            
        if(target < A.data)
            return bst(A.left);
        else if(target > A.data)
            return bst(A.right);
        else
            return true;
    }

    return bst(A, target)
}

const solveIteratively = function(A, target) {
    let tmp = A;
    while(tmp != null) {
        if(tmp.data == target)
            return true;
        else if(target < tmp.data)
            tmp = tmp.left;
        else    
            tmp = tmp.right;
    }
    return false;
}

const TreeNode = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
const target = 2;
const res = solve(root, target);
console.log(res);
