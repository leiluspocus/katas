/**
 Do not return anything, modify matrix in-place instead.
 */ 
function rotate(matrix: number[][]) : void {
    // Permutation de matrice
    for (let i_line =0; i_line < matrix.length; i_line++ ) {
        for ( let j_column = i_line + 1; j_column < matrix.length; j_column++ ) {
            let tmp = matrix[i_line][j_column];
            matrix[i_line][j_column] = matrix[j_column][i_line]
            matrix[j_column][i_line] = tmp;
        }
    }

    // Inversion de chaque ligne
    for ( let i=0; i < matrix.length; i++) {
        matrix[i] = matrix[i].reverse()
    }
}



rotate([[1, 2], [3, 4]]); // Expected result : [[3, 1], [4, 2]]

rotate([[1,2,3],[4,5,6],[7,8,9]]); // 
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);