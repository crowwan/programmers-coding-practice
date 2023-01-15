function solution(emergency) {
  const arrMap = [...emergency]
    .sort((a, b) => b - a)
    .reduce((a, b, i) => {
      a[b] = i + 1;
      return a;
    }, {});
  // {76: 0 + 1, 24: 1 + 1, 3: 2 + 1}
  return emergency.map((a) => arrMap[a]);
  [3, 1, 2];
}
// map 이 하나하나 돌아가면서 콜백에서 return하는 값으로 배열을 만든다.
