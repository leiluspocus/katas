const containsDuplicate = (line : string[]) => {
    const elements = new Set()
    let nbElementsFilled = 0;
    for ( let i = 0; i < line.length; i++) {
        elements.add(line[i]);
        if ( line[i] !== '.') {
            nbElementsFilled++;
        } 
    }
    return elements.size - 1 !== nbElementsFilled;
}

const isValidSudoku = (board: string[][]) => {
    const MAX_COLUMNS_NUMBER_SUDOKU = 9;
    // Check line validity
    for ( let i = 0; i < board.length ; i++) {
        if ( containsDuplicate(board[i]) ) {
            return false;
        }
    }

    // Check column validity
    for (let j=0; j < MAX_COLUMNS_NUMBER_SUDOKU ; j++) {
        const columnsToCheck = [];
        for ( let i=0; i < MAX_COLUMNS_NUMBER_SUDOKU ; i++) {
            columnsToCheck.push(board[i][j]);
        }
        if ( containsDuplicate(columnsToCheck)) {
            return false;
        }
    }

    // Check squares validity
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const squareToCheck = []
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    // Check content of the 9 elements of each square
                    // Visualize the nine square in the biggest square.
                    const startCol = 3 * boxCol
                    const startRow = 3 * boxRow
                    squareToCheck.push(board[startRow + i][startCol + j])
                }
            }
            if ( containsDuplicate (squareToCheck)) {
                return false;
            }
        }
    }
    return true;
}

console.log(isValidSudoku(
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]))

console.log(isValidSudoku(
    [[".",".",".",".","5",".",".","1","."],
     [".","4",".","3",".",".",".",".","."],
     [".",".",".",".",".","3",".",".","1"],
     ["8",".",".",".",".",".",".","2","."],
     [".",".","2",".","7",".",".",".","."],
     [".","1","5",".",".",".",".",".","."],
     [".",".",".",".",".","2",".",".","."],
     [".","2",".","9",".",".",".",".","."],
     [".",".","4",".",".",".",".",".","."]]))