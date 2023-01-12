function solution(box, n) {
  return box.map((e) => parseInt(e / n)).reduce((a, b) => a * b);
}
