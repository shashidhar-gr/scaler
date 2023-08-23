for(let i = 0; i < this.rows; i++){
    let input = readLine().split(" ");
    for(let j = 0; j < this.cols; j++){
        this.myMatrix[i][j] = +input[j];
    }
}