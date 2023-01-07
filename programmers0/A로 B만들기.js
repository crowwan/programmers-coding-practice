function solution(before, after) {
  for (const a of before) {
    after.includes(a);
    after = after.replace(a, "");
  }
  return !after.length ? 1 : 0;
}
