function solution(array, n) {
  array.push(n);
  array.sort((a, b) => a - b);

  const i = array.indexOf(n);

  if (i === 0) return array[1];
  if (i === array.length - 1) return array.at(-2);
  return array[i] - array[i - 1] <= array[i + 1] - array[i]
    ? array[i - 1]
    : array[i + 1];
}
// forEach => 요소를 순회하면서 콜백을 실행 => 내부에 배열을 만드는 거 아니면 그냥 for of랑 같다
// let cnt = 0;
// [1,2,3].map((a)=>{
//     cnt++;
// })
// [null,null,null]
// map => 요소를 순회하면서 콜백의 return 값을 요소로하는 배열을 생성 => 배열 만드는 애다
