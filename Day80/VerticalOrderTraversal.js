function TreeNode(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

const solve = function(root) {
    let map = new Map();
    let min = 0;
    let max = 0;
    const bfs = function(root) {
        if(root == null)
            return res;
        
        let q = [];
        q.push({k :0, node: root});
        
        while(q.length) {
            let qLen = q.length;
            for(let i = 0; i < qLen; i++) {
                let obj = q.shift();
                let node = obj.node;
                let k = obj.k;
                
                if(map[k]) {
                    map[k].push(node.data)
                }
                else {
                    map[k] = [node.data]
                }
                
                max = Math.max(max, k);
                min = Math.min(min, k);
                if(node.left != null)
                    q.push({k :k-1, node: node.left});
                
                if(node.right != null) 
                    q.push({k :k+1, node: node.right});
            }
        } 
    }
    bfs(A);
    let finalres = []
    for(let i = min; i <= max; i++) {
        finalres.push(map[i])
    }
    return finalres;
}

const root = new TreeNode(3);
const left = new TreeNode(9);
const right = new TreeNode(20);

root.left = left;
root.right = right;

const res = solve(root);
console.log(res);
