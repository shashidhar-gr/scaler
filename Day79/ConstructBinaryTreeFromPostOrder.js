class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
} 

const solve = function(inorder, postorder) {
    return createBinaryTree(postorder, inorder);
}

const inorder = [6, 1, 3, 2];
const postorder = [6, 3, 2, 1];
const root = solve(inorder, postorder);
console.log(root);

function createBinaryTree(postorder, inorder) {
    if(postorder.length == 1)
        return new TreeNode(postorder[0])
    if(postorder.length == 0)
        return null
    let rootIndex = getRootIndex(postorder.slice(-1), inorder);
    let left = createBinaryTree(postorder.slice(0, rootIndex), inorder.slice(0, rootIndex));
    let right = createBinaryTree(postorder.slice(rootIndex, postorder.length-1), inorder.slice(rootIndex + 1, inorder.length));
    let root = new TreeNode(postorder.slice(-1));
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


