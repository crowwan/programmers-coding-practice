function solution(numbers) {
  let max = -100000000;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] > max) max = numbers[i] * numbers[j];
    }
  }
  return max;
}
function solution(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  return Math.max(sorted[0] * sorted[1], sorted.at(-2) * sorted.at(-1));
}
