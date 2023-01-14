function solution(n) {
  const l = lcm(n, 6, gcd(n, 6));

  return l / 6;
}

function gcd(a, b) {
  if (!(a % b)) return b;
  return gcd(b, a % b);
}

function lcm(a, b, gcd) {
  return (a * b) / gcd;
}
