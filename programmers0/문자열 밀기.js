function solution(A, B) {
  let cnt = 1;

  if (A === B) return 0;

  for (let i = 0; i < A.length; i++, cnt++) {
    A = A[A.length - 1] + A.slice(0, A.length - 1);
    console.log(A);
    if (A === B) return cnt;
  }

  return -1;
}
