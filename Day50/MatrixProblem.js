const solve = function(A) {
    let totalperimeter = 0;
    for(let row = 0; row < A.length; row++) {
        for(let col = 0; col < A[row].length; col++) {
            if(A[row][col] != 1)
                continue;
            let perimeter = 0;
            // Checking grid boudries.
            if(row - 1 < 0)
                perimeter += 1;
            
            if(row + 1 >= A.length)
                perimeter += 1;   
            
            if(col - 1 < 0)
                perimeter += 1;
                
            if(col + 1 >= A[row].length)
                perimeter += 1;
            
            //Checking sorrounding water.
            if(row - 1 >= 0 && A[row-1][col] != undefined && A[row-1][col] == 0)
                perimeter += 1;
                
            if(row + 1 < A.length && A[row + 1][col] != undefined && A[row + 1][col] == 0)
                perimeter += 1;
                
            if(col - 1 >= 0 && A[row][col - 1] != undefined && A[row][col - 1] == 0)
                perimeter += 1;
                
            if(col + 1 < A[row].length && A[row][col + 1] != undefined && A[row][col + 1] == 0)
                perimeter += 1;
                  
            totalperimeter += perimeter;
        }
    }   
    return totalperimeter;
}
const A = [ 
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0]
        ];
const res = solve(A);
console.log(res);

