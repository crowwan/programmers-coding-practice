function solution(numbers) {
  const sumOf = numbers.reduce((acc, cur) => acc + cur);
  return sumOf / numbers.length;
}
