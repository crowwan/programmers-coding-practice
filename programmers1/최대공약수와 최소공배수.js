function solution(n, m) {
  const [a, b] = n < m ? [m, n] : [n, m];
  const g = gcd(a, b);
  const l = lcm(a, b, g);

  return [g, l];
}

function gcd(a, b) {
  if (!(a % b)) return b;
  return gcd(b, a % b);
}

function lcm(a, b, gcd) {
  return (a * b) / gcd;
}
