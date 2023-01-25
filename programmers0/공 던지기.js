function solution(numbers, k) {
  for (let i = 1; i < k; i++) {
    numbers.push(numbers.shift());
    numbers.push(numbers.shift());
  }
  return numbers.shift();
}
