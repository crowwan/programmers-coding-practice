function solution(my_string) {
  const reg = /[^0-9]/g;
  return [...my_string.replace(reg, "")].reduce(
    (a, b) => parseInt(a) + parseInt(b),
    0
  );
}
