function solution(numer1, denom1, numer2, denom2) {
  const d = denom2 * numer1 + denom1 * numer2;
  const n = denom1 * denom2;
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const g = gcd(d, n);
  return [d / g, n / g];
}
