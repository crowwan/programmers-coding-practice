function solution(chicken) {
  let c = chicken;
  let res = 0;
  while (c >= 10) {
    console.log(c);
    res += Math.floor(c / 10);
    c = Math.floor(c / 10) + (c % 10);
  }
  return res;
}
