function solution(n) {
  let res = 1;
  let i = 1;
  while (res <= n) {
    i++;
    res *= i;
  }
  return i - 1;
}
