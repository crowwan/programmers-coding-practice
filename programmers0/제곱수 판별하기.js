function solution(n) {
  const rt = Math.sqrt(n);

  return rt === Math.ceil(rt) ? 1 : 2;
}
