function solution(num_list, n) {
  const res = [];
  let start = 0;
  let end = n;
  while (res.length < num_list.length / n) {
    res.push(num_list.slice(start, end));
    start = end;
    end = end + n;
  }
  return res;
}
