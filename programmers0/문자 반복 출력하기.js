function solution(my_string, n) {
  let res = "";
  for (const a of my_string) res += a.repeat(n);
  return res;
}
