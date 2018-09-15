var rows, cols, grid;

readData = function (data) {
    readDataFromMatrix(data);
    return this;
};

isValidSudoku = function () {
    return (validate(rows) && validate(cols) && validate(grid));
};

validate = function (data) {
    for (var row = 0; row < 9; row++) {
        data[row].sort();
        for (var col = 0; col < 9; col++) {
            var value = data[row][col],
                nextvalue = data[row][col + 1];

            if (!(value && value > 0 && value < 10)) {
                return false;
            }

            if (col !== 8 && value === nextvalue) {
                return false;
            }
        }
    }
    return true;
};


readDataFromMatrix = function (data) {
    rows = data;
    cols = [];
    grid = [];

    for (var i = 0; i < 9; i++) {
        cols.push([]);
        grid.push([]);
    }
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {

            cols[col][row] = data[row][col];

            gridRow = Math.floor(row / 3);
            gridCol = Math.floor(col / 3);
            gridIndex = gridRow * 3 + gridCol;

            grid[gridIndex].push(data[row][col]);
        }
    }
};

var sudokudata = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log(readData(sudokudata).isValidSudoku());