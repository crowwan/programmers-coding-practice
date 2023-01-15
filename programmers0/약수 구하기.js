function solution(n) {
  const rt = Math.sqrt(n);
  const res = [];
  for (let i = 1; i <= rt; i++) {
    if (n % i === 0) {
      n / i !== i ? res.push(i, n / i) : res.push(i);
    }
  }
  return res.sort((a, b) => a - b);
}
