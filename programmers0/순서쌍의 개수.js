function solution(n) {
  const s = Math.sqrt(n);
  let cnt = 1;

  if (n === 1) return 1;

  for (let i = 2; i <= s; i++) {
    if (!(n % i)) cnt++;
  }
  return s % 2 ? cnt * 2 : cnt * 2 - 1;
}
