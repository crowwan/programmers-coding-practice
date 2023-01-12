function solution(s) {
  let res = 0;
  let prev = 0;
  const arr = s.split(" ");
  for (const a of arr) {
    if (a !== "Z") {
      res += +a;
      prev = +a;
    } else {
      res -= prev;
    }
  }
  return res;
}
