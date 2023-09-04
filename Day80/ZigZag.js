function TreeNode(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

const solve = function(A) {
    const res = [];
    const bfs = function(root) {
        if(root == null)
            return res;

        let q = [];
        q.push(root);
        while(q.length) {
            let level = [];
            let qLen = q.length;
            for(let i = 0; i < qLen; i++) {
                let node = q.shift();
                level.push(node.data);
                if(node.left != null) q.push(node.left)
                if(node.right != null) q.push(node.right)
            }
            res.push(level);
        } 
    }
    bfs(A);
    for(let i = 0; i < res.length; i++) {
        if(i % 2 != 0)
            res[i] = res[i].reverse();
    }
    
    return res;
}

const root = new TreeNode(3);
const left = new TreeNode(9);
const right = new TreeNode(20);

root.left = left;
root.right = right;

right.left = new TreeNode(15);
right.right = new TreeNode(7);

const res = solve(root);
console.log(res);