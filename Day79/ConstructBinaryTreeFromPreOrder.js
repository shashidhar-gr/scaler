class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
} 

const solve = function(preorder, inorder) {
    return createBinaryTree(preorder, inorder);
}

const inorder = [2,1,6,5,3,4];
const preorder = [5,6,1,2,3,4];
const root = solve(preorder, inorder);
console.log(root);

function createBinaryTree(preorder, inorder) {
    if(preorder.length == 1)
        return new TreeNode(preorder[0])
    if(preorder.length == 0)
        return null
    let rootIndex = getRootIndex(preorder[0], inorder);
    let left = createBinaryTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    let right = createBinaryTree(preorder.slice(rootIndex + 1, preorder.length), inorder.slice(rootIndex + 1, inorder.length));
    let root = new TreeNode(preorder[0]);
    root.left = left;
    root.right = right;
    return root;
}

function getRootIndex(root, inorder) {
    for(let i = 0; i < inorder.length; i++) {
        if(root == inorder[i])
            return i;
    }
}


