function solution(sides) {
  const max = sides[0] > sides[1] ? sides[0] : sides[1];
  const ot = sides[0] + sides[1] - 1 - max;
  const dif = max - Math.abs(sides[0] - sides[1]);

  return dif + ot;
}
