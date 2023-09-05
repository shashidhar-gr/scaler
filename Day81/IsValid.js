const solve = function(A) {
    let res = [];
    let inorder = function(A) {
        if(A == null)
            return;
        inorder(A.left);
        res.push(A.data);
        inorder(A.right)
    }
    inorder(A);
    console.log(res)
    for(let i = 0; i < res.length - 1; i++) {
        if(res[i] > res[i+1])
            return false;
    }

    return true;
}

const TreeNode = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

const root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(4);
let tmp = root.right;
tmp.left = new TreeNode(1);
tmp.right = new TreeNode(2);

const res = solve(root);
console.log(res);