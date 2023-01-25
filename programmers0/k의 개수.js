function solution(i, j, k) {
  let cnt = 0;
  for (let c = i; c <= j; c++) {
    cnt += [...c.toString()].filter((a) => a === k + "").length;
  }
  return cnt;
}
