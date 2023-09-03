const solve = function(root) {
    const res = [];
    postorder(root, res);
    return res;
}

const postorder = function(node, res) {
    if (node == null) 
        return;
    postorder(node["left"], res);
    postorder(node["right"], res);
    res.push(node["data"]);
}
