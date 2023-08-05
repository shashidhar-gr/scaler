const solve = function() {
    let count = 0;
    func(0, 0, 1, 3);
    function func(sr, sc, dr, dc) {
        if(sr > dr || sc > dc)
            return;
        if(sr == dr && sc == dc) {
            count++;
            return;
        }
        func(sr, sc + 1, dr, dc);
        func(sr+1, sc, dr, dc);
    }
    console.log(count);
}
solve();