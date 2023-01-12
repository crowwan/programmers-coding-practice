function solution(n) {
  return [...(n + "")].reduce((a, b) => parseInt(a) + parseInt(b), 0);
}
