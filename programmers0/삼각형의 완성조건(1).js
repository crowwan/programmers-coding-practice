function solution(sides) {
  const arr = sides.sort((a, b) => a - b);

  return canBeTriangle(...arr);
}

function canBeTriangle(a, b, c) {
  return c < a + b ? 1 : 2;
}
