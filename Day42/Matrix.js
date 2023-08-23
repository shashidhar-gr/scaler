class Matrix {
    // Define constructor here
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];
    }
    
    input(){
        // Complete the function
        // use readLine() to read individual integers/strings
        for(let i = 0; i < this.rows; i++) {
            //let input = Object.assign([], readLine().split(" ").map((num) => Number(num)));
            data.push(Object.assign([], readLine().split(" ").map((num) => Number(num))));
        }
    }
    
    add(x){
        // Complete the function
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                x[row][col] += this.data[row][col];
            }
        }
        return x;
    }
    
    subtract(x){
        // Complete the function
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                x[row][col] -= this.data[row][col];
            }
        }
        return x;
    }
    
    transpose(){
        // Complete the function
        let transpose = [];
        for(let i = 0; i < this.cols; i++) {
            let coldata = [];
            for(let j = 0; j < this.rows; j++) {
                coldata.push(this.data[i][j])
            }
            transpose.push(Object.assign([], coldata))
        }
        return transpose;
    }
    
    print(){
        // Complete the function
        for(let i = 0; i < this.rows; i++) {
            let str = "";
            for(let j = 0; j < this.cols; j++) {
                str += this.data[row][col] + " ";
            }
        }
        console.log(str);
    }
};

/*
a = new Matrix(10, 5)  // 10 rows, 5 columns
a.input() 
b = new Matrix(10, 5)  // 10 rows, 5 columns
b.input()
c1 = a.add(b)
c2 = a.subtract(b)
c3 = a.transpose()
a.print()
*/