function solution(score) {
  const avgs = score.map((a) => (a[0] + a[1]) / 2).sort((a, b) => b - a);
  return score.map((a) => avgs.indexOf((a[0] + a[1]) / 2) + 1);
}
