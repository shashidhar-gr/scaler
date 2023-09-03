const solve = function(root) {
    const res = [];
    preorder(root, res);
    return res;
}

const preorder = function(node, res) {
    if (node == null) 
        return;
    res.push(node["data"]);
    preorder(node["left"], res);
    preorder(node["right"], res);
}
