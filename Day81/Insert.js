const solve = function(A, target) {
    let bst = function(A) {
        if(A == null)
            return;
        if(target < A.left)
            bst(A.left)
        else    
            bst(A.right)
        
    }
} 

const TreeNode = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

const root = new TreeNode(4);
root.left = new TreeNode(0);
root.right = new TreeNode(10);

const res = solve(root, 8);
console.log(root);