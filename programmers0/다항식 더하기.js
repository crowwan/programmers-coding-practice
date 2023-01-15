function solution(polynomial) {
  const [x, c] = polynomial.split("+").reduce(
    ([a, b], t) => {
      if (t.includes("x")) {
        return [a + parseInt(t.trim().replace("x", "") || 1), b];
      }
      return [a, b + parseInt(t.trim())];
    },
    [0, 0]
  );
  if (!x && !c) return "0";
  if (!x) return c + "";
  if (!c) return `${x === 1 ? "" : x}x`;
  return `${x === 1 ? "" : x}x + ${c}`;
}
