// function solution(array) {
//     return array.reduce((a,b,i) => b > a[0] ? [b,i] : a,[-1,0]);
// }

function solution(array) {
  const res = {};
  let i = 0;
  for (const a of array) {
    res[a] = i++;
  }
  return [Math.max(...array), res[Math.max(...array)]];
}
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}
