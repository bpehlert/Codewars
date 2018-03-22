// var board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
//              [6, 7, 2, 1, 9, 5, 3, 4, 8],
//              [1, 9, 8, 3, 4, 2, 5, 6, 7],
//              [8, 5, 9, 7, 6, 1, 4, 2, 3],
//              [4, 2, 6, 8, 5, 3, 7, 9, 1],
//              [7, 1, 3, 9, 2, 4, 8, 5, 6],
//              [9, 6, 1, 5, 3, 7, 2, 8, 4],
//              [2, 8, 7, 4, 1, 9, 6, 3, 5],
//              [3, 4, 5, 2, 8, 6, 1, 7, 9]]

function doneOrNot(board){
  var n = 0
  var vertSudoku = []
  var quadrants = []

// Creates a new array flipping the original
// Sudoku on its side to compare vertical values.
  for (var i = 0; i < board.length; i++) {
    var checkVert = []
    for (var x = 0; x < board.length; x++) {
      checkVert.push(board[x][i])
    }vertSudoku.push(checkVert);
  }

// Creates a new array with all of the quadrants in order.
  var count = 0
  for (var i = 0; i<=6; i = i+3) {
    for (var e = 0; e <=6; e = e+3) {
    var singleQuad = []
      for (var y = i; y < i+3; y++) {
        for (var x = e; x < e+3; x++) {
          singleQuad = singleQuad.concat(board[y][x]);
        }
      }quadrants[count] = singleQuad;
      count++
    }
  }

// Checking straight of 1 through 9 for the different arrays.
  for (var i = 0; i < board.length; i++) {
    for (var x = 0; x < 9; x++) {
      if (board[i].sort()[x] == x+1) n++;
      if (board[i].sort()[x] != x+1) n--;
      }
    }
  for (var i = 0; i < vertSudoku.length; i++) {
    for (var x = 0; x < 9; x++) {
      if (vertSudoku[i].sort()[x] == x+1) n++;
      if (vertSudoku[i].sort()[x] != x+1) n--;
      }
    }
  for (var i = 0; i < quadrants.length; i++) {
    for (var x = 0; x < 9; x++) {
      if (quadrants[i].sort()[x] == x+1) n++;
      if (quadrants[i].sort()[x] != x+1) n--;
      }
    }

// Logic test
    if (n == 243){
      return "Finished!"
    }else {
      return "Try again!"
    }
}
