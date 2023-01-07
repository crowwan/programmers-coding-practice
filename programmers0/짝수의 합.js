function solution(n) {
  const numOfEvens = Math.floor(n / 2);

  return numOfEvens * (numOfEvens + 1);
}
