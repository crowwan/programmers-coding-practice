function solution(board) {
  let count = 0;
  const nearMap = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const canAccess = (n, m) =>
    n >= 0 && n < board.length && m >= 0 && m < board.length;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (
        board[i][j] !== 1 &&
        !nearMap.some(
          ([n, m]) => canAccess(i + n, j + m) && board[i + n][j + m] === 1
        )
      ) {
        count++;
      }
    }
  }

  return count;
}
