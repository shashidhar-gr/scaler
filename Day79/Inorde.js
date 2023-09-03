const solve = function(root) {
    const res = [];
    inorder(root, res);
    return res;
}

const inorder = function(node, res) {
    if (node == null) 
        return;
    inorder(node["left"], res);
    res.push(node["data"]);
    inorder(node["right"], res);
}
