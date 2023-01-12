function solution(num, total) {
  const a = (2 * total - num ** 2 + num) / (2 * num);
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(i + a);
  }
  return res;
}
