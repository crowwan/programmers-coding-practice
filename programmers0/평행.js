function solution(dots) {
  const dydx = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dx = dots[i][0] - dots[j][0];
      const dy = dots[i][1] - dots[j][1];
      if (dydx.includes(dy / dx)) return 1;
      dydx.push(dy / dx);
    }
  }
  return 0;
}
