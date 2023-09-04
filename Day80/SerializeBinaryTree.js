function solve(A) {
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
                if(node == -1) {
                  level.push(-1)
                  continue;
                }
                else
                  level.push(node.data);
                
                if(node.left != null) 
                  q.push(node.left)
                else
                  q.push(-1);
                
                if(node.right != null) 
                  q.push(node.right)
                else
                  q.push(-1);
            }
            res.push(level);
        } 
    }
    bfs(A);
    let finalres = [];
    for(const arr of res) {
      finalres.push(...arr)
    }
    return finalres;
}