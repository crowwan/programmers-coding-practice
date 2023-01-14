function solution(my_string) {
  return [
    ...map(
      (a) => parseInt(a),
      filter((a) => !isNaN(parseInt(a)), [...my_string])
    ),
  ].sort((a, b) => a - b);
  // return [...my_string].reduce((a,b) => !isNaN(parseInt(b)) ? [...a,parseInt(b)] : a,[]).sort((a,b)=> a - b);
}

function* filter(predi, iter) {
  for (const a of iter) {
    if (predi(a)) yield a;
  }
}
function* map(mapper, iter) {
  for (const a of iter) yield mapper(a);
}
