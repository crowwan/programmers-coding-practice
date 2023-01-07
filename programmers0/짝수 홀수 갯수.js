function solution(num_list) {
  const even = num_list.filter((e) => e % 2 === 0);
  const oddLen = num_list.length - even.length;

  return [even.length, oddLen];
}
