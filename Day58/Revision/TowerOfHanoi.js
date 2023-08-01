const tower = function(n, source, helper, destination) {
    if(n == 1) {
        console.log("Move disk "+n+" from "+source+" to "+destination);
        return;
    }
    if(n == 2) {
        console.log("Move disk "+n+" from "+source+" to "+helper);
        tower(n - 1, source, destination, helper);
        return;
    }
}

const n = 2;
tower(n, "A", "B", "C");