function solution(a, b) {
  const g = gcd(a, b);

  return isFin(b / g);
}

function gcd(a, b) {
  if (!(a % b)) return b;
  return gcd(b, a % b);
}
function isFin(a) {
  if (a === 1) return 1;
  if (a % 2 === 0) return isFin(a / 2);
  else if (a % 5 === 0) return isFin(a / 5);
  return 2;
}
