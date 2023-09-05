function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

const solve = function(arr) {
    const queue = [];
    let root = new TreeNode(arr.shift());
    queue.push(root);
    while(queue.length) {
        let node = queue.shift();
        let leftnode = arr.shift();
        let rightnode = arr.shift();
        node.left = leftnode == -1 ? null : new TreeNode(leftnode);
        node.right = rightnode == -1 ? null : new TreeNode(rightnode);
        if(node.left != null) queue.push(node.left);
        if(node.right != null) queue.push(node.right);
    }
    return root;
}

const arr = [1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1];
const node = solve(arr);
console.log(node);